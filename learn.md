#lazy component: allows you to dynamically import a component
the component is only called when the user navigates to it

#Suspense: you wrap the lazily component in a Suspense and provide 
a fallback element like a loader. the element will be displayed
while waiting for the lazily component

!!user.token => converts the value to boolean type // true or false

new Set(...[]) => create unique collection

const SUPER_ADMIN = super-admin;

const isSuperAdimin = (user) => {
  return user.roles.some(role => role.slug === SUPER_ADMIN)
}

const hasPermission = (authority, user) => {
  if (!authority.length) return true

  const hasAccess = user.permissions.some(permission => authority.includes(permission))

  return hasAccess;
}

const filterMenuItems = (items, user) => {
  return items.filter(item => {
    const hasAccess = hasPermission(item.authority, user)

    if (!hasAccess) return false

    return true;
  })
}