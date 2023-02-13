import React from 'react'
import classes from './SidebarOptions.module.css';


// Destructuring
function SidebarOptions({ Icon, title }) {
  return (
    <aside className={classes['sidebar-options']}>
        <Icon className={classes['sidebar-icons']} />
        <h4>{title}</h4>
    </aside>
  )
}

export default SidebarOptions;