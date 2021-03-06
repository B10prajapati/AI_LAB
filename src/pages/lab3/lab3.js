import React from "react";
import { Grid } from "@material-ui/core";

import CodeBlock from "../../components/CodeBlock";
import { snippets } from "../../snippets";
import WaterjugComponent from "../../features/waterjug/WaterjugComponent";

const Lab3 = () => {
  const tabNameList = ["Solved Examples", "Rules", "Solution", "Class"];
  const tabCodeSnippetList = [
    snippets.water_jug_solution,
    snippets.water_jug_rules,
    snippets.water_jug_pour_rule,
    snippets.water_jug,
  ];

  return (
    <Grid item container direction="column" spacing={2}>
      <Grid item>
        <WaterjugComponent />
      </Grid>

      <Grid item xs={12} sm={12}>
        <CodeBlock
          tabNameList={tabNameList}
          tabCodeSnippetList={tabCodeSnippetList}
          language="javascript"
        />
      </Grid>
    </Grid>
  );
};
export default Lab3;
