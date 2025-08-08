import React, { useState } from "react";
import GeneralContext from "./GeneralContext";


export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");
  
    const handleOpenBuyWindow = (uid) => {
      setIsBuyWindowOpen(true);
      setSelectedStockUID(uid);
    };
  
    const handleCloseBuyWindow = () => {
      setIsBuyWindowOpen(false);
      setSelectedStockUID("");
    };
  
    return (
      <GeneralContext.Provider
        value={{
          openBuyWindow: handleOpenBuyWindow,
          closeBuyWindow: handleCloseBuyWindow,
        }}
      >
        {props.children}
        {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      </GeneralContext.Provider>
    );
  };
  