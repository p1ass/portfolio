// IPv6 は 1 回線に /64 がまるごと割り当てられることが多く、アドレスを変えて制限を回避できるので /64 単位で数える。
export const rateLimitKey = (ip: string) => {
  if (!ip.includes(':')) {
    return ip
  }
  const [head = '', tail = ''] = ip.split('::')
  const headGroups = head ? head.split(':') : []
  const tailGroups = ip.includes('::') && tail ? tail.split(':') : []
  const groups = ip.includes('::')
    ? [...headGroups, ...Array(8 - headGroups.length - tailGroups.length).fill('0'), ...tailGroups]
    : headGroups
  return `${groups
    .slice(0, 4)
    .map((group) => parseInt(group, 16).toString(16))
    .join(':')}::/64`
}
