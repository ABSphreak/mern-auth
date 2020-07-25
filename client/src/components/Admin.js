import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  seperator: {
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Admin = (props) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.seperator} />
      <Typography variant="h3">Admin</Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, veritatis
        repudiandae? Nobis pariatur dolorem deleniti aliquid non maiores vitae
        animi voluptatum doloremque molestias iste ipsum, obcaecati qui dolore
        nostrum accusamus iure dolorum nesciunt mollitia officia voluptas
        asperiores atque veritatis maxime. Corporis impedit qui rem voluptates
        voluptatum suscipit minus accusantium quam. Voluptatibus, quae nulla.
      </Typography>
      <Typography paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, odio
        asperiores. Consectetur saepe a qui, nulla veniam optio sapiente non
        doloremque omnis vel nesciunt? Temporibus quibusdam quasi ipsum omnis,
        veniam quod in rerum, soluta iusto quis culpa! Nesciunt, alias fuga
        autem quia sit nisi! Eum, delectus? Excepturi optio eum soluta, atque
        non iusto, error magnam, iure quas asperiores sapiente cumque? Saepe
        inventore, totam voluptas esse minima quia quasi deserunt facilis et
        ducimus magni distinctio fuga est dolore. Ipsum ipsa quia eligendi
        blanditiis at expedita molestias asperiores iste in eveniet!
      </Typography>
      <Typography paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste voluptate
        numquam tenetur facere, non odio!
      </Typography>
    </main>
  );
};

export default Admin;
