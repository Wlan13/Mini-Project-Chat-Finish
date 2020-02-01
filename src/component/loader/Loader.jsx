import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const Loader = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LinearBuffer() {
  const classes = Loader();
  const [completed, setCompleted] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progress = React.useRef(() => {});
  React.useEffect(() => {
    progress.current = () => {
      if (completed > 100) {
        setCompleted(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setCompleted(completed + diff);
        setBuffer(completed + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    function tick() {
      progress.current();
    }
    const timer = setInterval(tick, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
        <LinearProgress variant="query" />
        <LinearProgress color="secondary" style={{marginTop:'50vh'}} />
        <LinearProgress variant="query"  style={{marginTop:'48vh'}} />
    </div>
  );
}



         /*  <div class="progress" style={{marginTop:'22%', marginLeft:'25vw', width:'50vw' }} >
          <div class="indeterminate"></div>
      </div> */
          //   <div style={{marginTop:'22%', marginLeft:'50%' }}>
          //        <div className="preloader-wrapper active">
          //           <div className="spinner-layer spinner-red-only">
          //             <div className="circle-clipper left">
          //               <div className="circle"></div>
          //                 </div>
          //               <div className="gap-patch">
          //             <div className="circle"></div>
          //           </div><div className="circle-clipper right">
          //         <div className="circle"></div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
