import React, { useMemo, useState, useEffect } from "react";
import { fetchSimpleIcons, renderSimpleIcon, Cloud } from "react-icon-cloud";
import { cloudProps } from "/utils/constants";

const renderCustomIcon = (icon, onClickEvent) => {
  // const onClickEvent = (ev) => {
  //   ev.preventDefault();
  //   console.log(ev);
  //   extraClass();
  // };
  return renderSimpleIcon({
    icon,
    minContrastRatio: 1.2,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: onClickEvent,
    },
  });
};

const DynamicCloud = ({ iconSlugs, id, onclickEvent, styleCanvas = {} }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(({ simpleIcons }) => {
      const iconsList = Object.values(simpleIcons).map((i) => ({
        ...i,
        title: i.title === "icon" ? i.slug : i.title,
      }));
      setData(iconsList);
    });
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) {
      return <p>Loading</p>;
    }

    return data.map((i) => renderCustomIcon(i, onclickEvent));
  }, [data]);
  const props = { ...cloudProps, ...styleCanvas };
  return (
    <Cloud id={id} {...props}>
      {renderedIcons}
    </Cloud>
  );
};

export default DynamicCloud;
