import clsx from "clsx";
import { useSetAtom } from "jotai";
import React, { useCallback } from "react";

import { selectedDemographicAtom } from "../../util/atoms";
import { Demographics, DemographicsLabels } from "../../util/demographics";
import { Dropdown } from "../dropdown";

export const DemographicsDropdown = () => {
  const setDemographic = useSetAtom(selectedDemographicAtom);
  const renderItem = useCallback(
    (demo: string) => (
      <div
        className={clsx(demo === Demographics.ALL && "text-amplify-dark-blue")}
      >
        {DemographicsLabels[demo]}
      </div>
    ),
    []
  );

  return (
    <Dropdown
      renderItem={renderItem}
      onChange={setDemographic}
      defaultContent="Demographics"
      items={Object.values(Demographics)}
    />
  );
};
