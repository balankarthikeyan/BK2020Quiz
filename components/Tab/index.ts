function Tab(props: ITabProps) {
  const {
    classList = [],
    list,
    activeMenuIdx = 0,
    shouldToggle = false,
    renderTabItem,
    renderTabItemMenu,
    renderTabItemContent,
    ...remainingProps
  } = props
  const [activeTabIdx, setActiveTabIdx] = React.useState(activeMenuIdx)

  const onTabMenuClick = (e: any) => {
    e.preventDefault()
    const curMenuIdx = +e.currentTarget.getAttribute('data-key')
    if (curMenuIdx === activeTabIdx && shouldToggle === true) {
      setActiveTabIdx(-1)
    } else {
      setActiveTabIdx(curMenuIdx)
    }
  }

  const renderTabMenu = (item: any, index: number) => {
    const { title } = item
    const titleClassName =
      'tab-menu-title' +
      (activeTabIdx === index
        ? ` active${!shouldToggle ? ' prevent' : ''}`
        : '')
    const children =
      renderTabItemMenu !== undefined
        ? renderTabItemMenu(title, index)
        : title
        ? title
        : `Tab ${index}`

    return (
      <React.Fragment key={`tab-menu-${index}`}>
        <span
          title={title}
          className={titleClassName}
          onClick={onTabMenuClick}
          data-key={index}
          role="navigation"
        >
          {children}
        </span>
      </React.Fragment>
    )
  }

  const renderTabContent = (item: any, index: number) => {
    const { name } = item
    const children =
      renderTabItemContent !== undefined ? (
        renderTabItemContent(item, index)
      ) : (
        <div>{`content-${index}!`}</div>
      )
    const contentClassName =
      'tab-menu-content overflow-scroll' +
      (activeTabIdx === index ? ' active' : '')

    return (
      <React.Fragment key={`tab-content-${index}`}>
        <section className={`${contentClassName} ${name}`}>{children}</section>
      </React.Fragment>
    )
  }


  const tabItemRenderProp =
    renderTabItem !== undefined ? renderTabItem : renderTabMenu

  return (
    <section className={`base-tab-panel`}>
      <section className="base-tab-menu-panel">
        {list && list.map(tabItemRenderProp)}
      </section>
      <section className="base-tab-content-panel">
        {list && list.map(renderTabContent)}
      </section>
    </section>
  )
}

export { Tab }
export default React.memo(Tab)
