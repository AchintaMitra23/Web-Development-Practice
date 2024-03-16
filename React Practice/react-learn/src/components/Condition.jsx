/* eslint-disable no-unused-vars */
import React from 'react';
import Welcome from './../misc_component/Welcome';
import Thankyou from './../misc_component/Thankyou';

const Condition = () => {
  // const display = true;
  // if (display) {
  //   return (
  //     <div>
  //       <h3>This is a Conditional Component</h3>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h3>Good Habit !!! Code Daily</h3>
  //     </div>
  //   );
  // }

  const signIn = true;
  const welcome = <Welcome />;
  const thankyou = <Thankyou />;
  return (
    <div>
      {signIn ? welcome : thankyou}
    </div>
  );
};

export default Condition;
