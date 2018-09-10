import React from 'react';

/**
 * This is just the display for transaction table. It needs to be passed submit and change
 * handles in its props
 */
const ShowErrors = ({errors=[]}) => (
  <div>
    {errors.length > 0 &&
      <div className="callout warning">
        <ul>
          {errors.map((error, i) => {
            return (
              <li key={i}>{error}</li>
            )
          })}
        </ul>
      </div>
    }
  </div>
);

export default ShowErrors;
