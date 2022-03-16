import clsx from "clsx";
import isFunction from "lodash/isFunction";
import React, { ReactNode, useCallback, useMemo, useState } from "react";

type DefaultRender = () => ReactNode;
type Props = {
  items?: string[];
  enabled?: boolean;
  onChange?: (key: string) => void;
  defaultContent: string | DefaultRender;
  renderItem?: (key: string) => ReactNode;
};
export const Dropdown = ({
  items,
  onChange,
  renderItem,
  defaultContent,
  enabled = true,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);

  const onItemClick = useCallback(
    (item: string) => {
      if (!enabled) return;

      onChange?.(item);
      setOpen(false);
      setDropdownValue(item);
    },
    [enabled, onChange]
  );

  const defaultContentRendered = useMemo(
    () => (isFunction(defaultContent) ? defaultContent() : defaultContent),
    [defaultContent]
  );

  return (
    <div className="relative text-xs select-none sm:text-sm lg:text-base">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={clsx(
          "flex justify-between items-center py-2 px-4 space-x-2 w-full h-full rounded-lg border border-gray-300",
          !enabled && "text-gray-400",
          enabled && "focus:border-gray-500"
        )}
      >
        <div>
          {dropdownValue ? renderItem?.(dropdownValue) : defaultContentRendered}
        </div>
        <div>▾</div>
      </button>
      {enabled && items?.length && (
        <div
          className={clsx(
            "absolute z-10 p-2 mt-2 w-full min-w-[200px] bg-white rounded-lg shadow-2xl",
            !open && "hidden"
          )}
        >
          {items.map((item) => (
            <div
              key={item}
              onClick={() => onItemClick(item)}
              className="py-1.5 px-2 hover:bg-gray-200 rounded cursor-pointer"
            >
              {renderItem?.(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
