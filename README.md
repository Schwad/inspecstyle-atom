# InSpecStyle

This is a fork of [inspecstyle](https://atom.io/packages/inspecstyle) meant as a starting place for the inspecstyle atom package, which applies style guide suggestions to InSpec code.


## TODO:

Minimize steps to utilize. Currently need `gem install inspecstyle` and to require it within `.rubocop.yml` with a `require` before it will work. Maybe with an `inspecstyle install` command?

There are a few things you need to make sure are set up, including unique configs with `rbenv` and `chruby`.

## Installation

Linter package must be installed in order to use this plugin. If Linter is not
installed, please follow the instructions [here](https://github.com/AtomLinter/Linter).

### `rubocop` installation

Before using this plugin, you must ensure that `rubocop`, version 0.37 or
greater, is installed on your system. To install `rubocop`, do the following:

1.  Install [ruby](https://www.ruby-lang.org/).

2.  Install [rubocop](https://github.com/bbatsov/rubocop) by typing the
    following in a terminal:

    ```shell
    gem install rubocop
    ```

Now you can proceed to install the inspecstyle plugin.

### Plugin installation

```shell
apm install inspecstyle
```

## Settings

You can configure inspecstyle by editing `~/.atom/config.cson`
(choose Open Your Config in Atom menu):

### Using RVM

If you're using RVM and receiving errors in Atom that indicate Rubocop can't be
found, you may need to change `/bin` to `/wrappers` in the path that gets
returned from `which rubocop` before using it as your `command` setting.
For example, change:

```cson
"inspecstyle":
  command: "/Users/JohnDoe/.rvm/gems/ruby-2.2.4@global/bin/rubocop"
```

To:

```cson
"inspecstyle":
  command: "/Users/JohnDoe/.rvm/gems/ruby-2.2.4@global/wrappers/rubocop"
```
### Using `rbenv`

If you're using `rbenv`, it's recommended that you set your `command` to point to the Rubocop shim. This way, when you upgrade Ruby, the command will be a pointer to a Rubocop executable, regardless of your current Ruby version.

```cson
"inspecstyle":
  command: "/Users/JohnDoe/.rbenv/shims/rubocop"
```

### Using `chruby`

If you're using `chruby `, it's recommended that you set your `command` to execute `chruby-exec` to set version and run `rubocop`. Alternatively, you can reference the full intended path.

```cson
"inspecstyle":
  command: "/usr/local/bin/chruby-exec 2.5.0 -- rubocop"
```

or

```cson
"inspecstyle":
  command: "/Users/JohnDoe/.gem/ruby/2.5.1/bin/rubocop"
```
