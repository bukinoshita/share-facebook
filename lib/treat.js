const treat = (str, { replace = '' } = {}) => str.split(' ').join(replace)

module.exports = treat
