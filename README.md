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

```yaml
  name: cron-action.yml
on:
  schedule:
    - cron: '55 14 * * *' # UTC
jobs:
  cron-action-job: # job id
    name: where does this show? # job name
    runs-on: ubuntu-latest
    steps:
      # - name: Setup everything
      - run: echo "Cron job runs at " && date
      - uses: actions/checkout@v2 # defaults to master@latest
      - uses: actions/setup-node@v1 # copies over a pre-existing archive for faster access
        with:
          node-version: '12.x'
      - run: npm ci
      - run: |
          npm start
          node script.js fromnode
```
