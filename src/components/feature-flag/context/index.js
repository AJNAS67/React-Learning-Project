import React, { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";
export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlages] = useState({});

  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const response = await featureFlagsDataServiceCall();
      setEnabledFlages(response);
      setTimeout(() => {
        setLoading(false);
        
      }, 3000);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  }

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
