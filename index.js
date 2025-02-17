const core = require("@actions/core");

const github = require("@actions/github");

const label = core.getInput("label");

core.setOutput("checkedLabel", label);
const hasLabel = github.context.payload.pull_request.labels.some(
  item => item.name === label
);
core.setOutput("hasLabel", hasLabel);

console.log(`Does 'pull_request' have '${label}' label?: ${hasLabel}`);
console.log(`You can use this output as 'steps.<step id>.outputs.hasLabel' and 'steps.<step id>.outputs.checkedLabel' `);
