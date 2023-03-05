export const Tabs = ({ tabs }) => {
  return (
    <div>
      {tabs.map((t) => (
        <span style={{ padding: '0 10px' }}>{t()}</span>
      ))}
    </div>
  );
};
