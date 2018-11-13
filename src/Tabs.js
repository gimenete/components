import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectGlobal} from 'emotion'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import sass from 'sass.macro'

injectGlobal(sass`
  @import "primer-support/index.scss";
  @import "primer-navigation/lib/underline-nav.scss";
`)

const ITEM_CLASS = 'UnderlineNav-item no-underline'
const SELECTED_CLASS = 'selected'

function NavTabs({className, children, label}) {
  const classes = classnames(className, 'UnderlineNav', 'UnderlineNav-body')
  return (
    <TabList className={classes}>
      {children}
    </TabList>
  )
}

const Item = ({className, is: Tag, ...rest}) => {
  const classes = classnames(ITEM_CLASS, className)
  return <Tab className={classes} {...rest} />
}

NavTabs.Item = Item
NavTabs.Item.tabsRole = 'Tab'
NavTabs.tabsRole = 'TabList'

export default NavTabs
