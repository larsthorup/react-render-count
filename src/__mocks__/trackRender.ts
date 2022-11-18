const renderCounts: { [component: string]: number } = {};

export const trackRender = (component: string) =>
  (renderCounts[component] = (renderCounts[component] || 0) + 1);
export const renderCount = (component: string) => renderCounts[component];
