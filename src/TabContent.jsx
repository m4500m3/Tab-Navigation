export default function TabContent({ activeTab, tabs }) {
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div>
      <p className="tab-title">{currentTab?.title}</p>
      <p>{currentTab?.content}</p>
    </div>
  );
}
