'use babel'

import { satisfies } from 'semver'
import getRuleMarkDown from './helpers/rule-cache'

import ErrorFormatter from '../ErrorFormatter'

const HASCOPNAME_VERSION_RANGE = '>=0.52.0 <0.68.0'

export default class OffenseFormatter extends ErrorFormatter {
  format(version, {
    message: rawMessage, location, severity, cop_name: copName,
  }, filePath) {
    const hasCopName = satisfies(version, HASCOPNAME_VERSION_RANGE)
    const [excerpt, url] = rawMessage.split(/ \((.*)\)/, 2)
    let position
    if (location) {
      const { line, column, length } = location
      position = [[line - 1, column - 1], [line - 1, (length + column) - 1]]
    } else {
      position = this.topFileRange
    }

    const linterMessage = {
      url,
      excerpt: hasCopName ? excerpt : `${copName}: ${excerpt}`,
      severity: this.severityMapping[severity] || this.severityMapping.error,
      location: {
        file: filePath,
        position,
      },
    }

    getRuleMarkDown(url).then((markdown) => {
      if (markdown) {
        linterMessage.description = markdown
      }
    })

    return linterMessage
  }
}
