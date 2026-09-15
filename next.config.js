module.exports = {
  images: {
    remotePatterns: [
      'files.speakerdeck.com',
      'relaym.camph.net',
      'midare.p1ass.com',
      'repository-images.githubusercontent.com',
      'images.credly.com',
      'api.accredible.com',
      'bcdn.docswell.com'
    ].map((hostname) => ({ protocol: 'https', hostname }))
  }
}
