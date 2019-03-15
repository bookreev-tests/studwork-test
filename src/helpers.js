const helpers = {}

helpers.encodeAlias = (name) => {
  return name.toLowerCase().replace(/ /g, '_')
}

helpers.decodeAlias = (alias) => {
  return alias.replace(/_/g, ' ')
}

helpers.formatNumber = (sum) => {
  return parseInt(sum).toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,')
}

export default helpers