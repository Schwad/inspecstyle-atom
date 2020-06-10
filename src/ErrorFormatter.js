'use babel'

const TOP_FILE_RANGE = [[0, 0], [0, Infinity]]

export default class ErrorFormatter {
  constructor() {
    this.topFileRange = TOP_FILE_RANGE
  }

  format(filePath, message) {
    return [{
      excerpt: `InSpecStyle: ${message}`,
      severity: 'error',
      location: {
        file: filePath,
        position: this.topFileRange,
      },
    }]
  }
}
