# Does PR has the label?

Do you want to know if a PR has a particular label? You can use this action to easily check that, and use the output as you need:

Example:

```yaml
name: CI
on: 
  pull_request:
    types: [opened, labeled]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: boyum/pr-have-label-action@master
      id: checkLabel
      with:
        label: PROVISION:FEATURE_BRANCH
    - name: Does 'pull_request' have ${{ steps.checkLabel.outputs.checkedLabel }} label? 
      run: echo "${{ steps.checkLabel.outputs.hasLabel }}" 
```
