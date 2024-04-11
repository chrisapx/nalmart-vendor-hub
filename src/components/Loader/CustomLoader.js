import React from 'react';
import {BlockUI} from "primereact/blockui";
import {CirclesWithBar, LineWave} from "react-loader-spinner";
import Colors from "../Colors/Colors";



const CustomLoader=(props)=> {
  return (
      <>
          <BlockUI blocked={props.loading} fullScreen
                   template={
              <div className="text-center">
              <div>
                  <LineWave
                      height="100"
                      width="100"
                      color={Colors.primary}
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      outerCircleColor=""
                      innerCircleColor=""
                      barColor=""
                      ariaLabel='circles-with-bar-loading'
                  />
              </div>
              {/*<div className="mt-2" style={{color: Colors.primary}}>{props.loadingText}
              </div>*/}
          </div>}
          />
      </>
  );
}

export default CustomLoader;
