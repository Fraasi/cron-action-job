# action-test

* A detailed description of what the action does.
* Required input and output arguments.
* Optional input and output arguments.
* Secrets the action uses.
* Environment variables the action uses.
* An example of how to use your action in a workflow.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-javascript-action@v1
with:
  who-to-greet: 'Mona the Octocat'

  [usage limits](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions#usage-limits)

  https://crontab.guru/
