# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.3](https://github.com/bongdungyeuem27/cosmoskitconnect/compare/@cosmoskitconnect/core@0.2.0...@cosmoskitconnect/core@0.1.3) (2024-12-25)

### Bug Fixes

- change ([aead034](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/aead0344c38be6ffae5c2fcb75657e9bf119c0d9))
- change ([97d8ea7](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/97d8ea7026181bcfc2e5bacee623d968528c9f71))
- change ([021e06f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/021e06f1e3e392185aa017dda950690f4b3d7e90))
- pub ([685791f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/685791fb67186a7d425d2512dbeabc33ed3a6fbd))

# 0.2.0 (2024-12-25)

### Bug Fixes

- change ([47ef8f9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/47ef8f9f9e68e3be4a7939c548467dd8b6ee26b1))
- change ([8d76190](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8d7619060614f51af4d234fcbbe912e92b687f27))
- change ([4113cd1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4113cd169e0fa04e2c008a645c87ca8502ef1301))
- change ([75c02e3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/75c02e35a5192cf8377a77f08b638311360aa570))

## 2.17.3 (2024-12-13)

### Bug Fixes

- 15s ([446e19e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/446e19e2fafe76007ddc244dbcf1685efa6a1055))
- batch fetch messages ([d11e623](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d11e62349e0b3e57cdce360c9dbb3a07cca0bbfd))
- check cached on heartbeat ([e3abdcb](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e3abdcb1ec4f13d3c50603381fbb0432688daf2c))
- core persistence tests ([ddc1144](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ddc1144c1d6fd4e6f48bc2730c8d993f60bf7795))
- lint ([0e69447](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0e694479a3d5547c6e967f7fd112def12ae89d25))
- pending subscriber queue ([7422e9b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7422e9b88ed55feed19b4b4ed16780fb73199a31))
- relayer publish ([d02b5d4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d02b5d4a1231c4d07c7e44147a59cc9b5b22c72e))
- relayer to do only single connection attempt at a time ([c6d40c3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c6d40c30c81bd03c322c22d853464c3db0ba3d64))
- remove from attempts on successful sub ([59aef56](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/59aef568668be22d5e5a6f031d6a4ba74b8bb027))
- send appId to socket url ([9e5dc42](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9e5dc421e6db8456118793eaf2438c5476039aed))

### Features

- adds 5 time retry to connect ([16e9b26](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/16e9b2692048287b0d8f697ae36e1fc22a16090f))
- restart transport if pending subs fail a few times ([b77cad3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b77cad31c49bc0ecf68487efc63c28bcf26087d2))

## 2.17.2 (2024-11-05)

### Bug Fixes

- also throws when subscribe publish fails ([b758b2a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b758b2ab2611a0d4161944cc36c47ae1c73c1799))
- tests expecting promise ([de289db](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/de289db92a798b2f3e40f28200024abe92ae5cb1))
- throws on failed subscribe publish within timeout ([158dc7a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/158dc7ac6f75f9608e79580d8f078dd6c32b2224))

### Features

- checks provider.disconnect is defined before calling the method ([a56a3e9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a56a3e928b2a64c59c573625494d0e449e37f157))
- tests ([962c935](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/962c93517f649698ef0a3549477b15e934f916b4))
- tests ([70cee4c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/70cee4cac7259ea7d2ae61a7ef217aaaa4c625a0))
- tests ([ac72096](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ac720961733378fc7685ac5a5c906acceb4685d8))

# 2.17.0 (2024-10-01)

### Bug Fixes

- enables pairing via base64 encoded uri ([d1f70f6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d1f70f607026bafec315c8d50717f38e17c5fef0))
- resolves unhandled exception when json parse fails on window messages ([93e61ee](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/93e61eea9d72bb049cd1528d1f780415d3c4cf25))
- sets domain if available else sets `sp` ([a9738e9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a9738e95a0159886a11d40a9f75b56fa81f8dfdb))
- test ([4a96e1f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4a96e1f19a23991351feb477df2b6a07e55e0eb5))

### Features

- adds `formatUriFromPairing` ([91688a0](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/91688a07a92dafd8ffede99c4b14a1bd4d954d36))
- init event ([2e23e93](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2e23e93cecc4e7cdb1f34d55cffbf464115875db))

# 2.16.0 (2024-09-06)

## 2.15.3 (2024-09-05)

### Bug Fixes

- enforces origin url to be verified to produce verify context ([b15dbb6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b15dbb65214404dd4483215a5b2cc341165223df))
- subscribe during link mode ([64d7804](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/64d7804d160df1c6d55e711f755649eebeb6889f))

## 2.15.2 (2024-08-30)

### Bug Fixes

- abort controller aborting itself ([7ff0fcb](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7ff0fcb95e367e3a815d3ff63964ebeacd2425a7))
- fixes bug where relayer could go into reconnection loop when multiple disconnect events are emitted at the same time ([dbbf7c2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/dbbf7c24e48166a221222bfaaee7e636aa3089b5))
- reject when abort controller signals instead of throw an error ([56fbd66](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/56fbd6648974e80d637629bef30c07cb5b540a39))
- validates jwt id against encrypted id of the particular request ([b138715](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b138715223dd5832ea34d3c53e27d7d8900102a9))

### Features

- offline subscribe in link-mode ([92d8b83](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/92d8b835754f86d0e6f38af9369231575dd3c37d))

## 2.15.1 (2024-08-20)

### Bug Fixes

- Verify V3 ([f3a836a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f3a836a938c4ecb608168b3b37d35853f9bec34c))

### Features

- client no longer starts wss connection on init unless there are cached topics ([73cff35](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/73cff35aa36e64dd2fa422943de2c4d103f3c420))

# 2.15.0 (2024-08-15)

### Bug Fixes

- adds new `attestation` field to publisher tests ([6b5a70a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6b5a70aed757c3499f35ef51f2af787a986b16d5))
- logging & rm event listener ([9659018](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9659018e358668bfd9366f53cdd78ec8cde91eb5))
- relayer test with new `attestation` param ([e0d979e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e0d979e0f87c5a8f8f20f2a20e39b39c50b7a395))

### Features

- implements `ecdsa` signature validation without relying on `node:crypto` or `crypto.subtle` ([fb3dceb](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/fb3dceb5b0b451d1804146b43d9b76a792d6f5f4))
- verify v2 ([d1966d4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d1966d413e749a98633658e86093942dc7556a22))

# 2.14.0 (2024-07-17)

### Bug Fixes

- always use fallback verify server ([ba98c14](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ba98c141f6d3037000b66f996ed001f4d0dc684e))
- increase fetch attestation timeout from 2s to 5s ([2616e7d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2616e7df954ed1a467eafe543dd9a4d733999d0d))
- test ([d0865a6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d0865a6b97c99d6fb8bc2f1eb474bc7ab2faa1e4))

### Features

- events sdk ([2ba4208](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2ba4208c9120e2be7014cdeb796a96214d9f11bb))
- implements `irn_batchFetchMessages` ([a533254](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a533254d58a938a34042e7cae5d565feca2b53ca))
- more tests ([c84e14e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c84e14eafc780d12c94e7d749e6a32d082bb5c99))
- tests ([6e08f09](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6e08f09a21441cc500e0b87b9d64373a8359e4dd))

## 2.12.2 (2024-04-09)

### Features

- adds `session_authenticate` to expirer ([1f47680](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1f4768071b9a8ee1d003984252bbd59c8f292716))

# 2.12.0 (2024-04-03)

### Bug Fixes

- missing toggle flag ([be39ebc](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/be39ebcbcc88d1de92dc8a7758725729907f1d5c))
- optimize cleanup ([aa6a42e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/aa6a42e142239a8071b7cd7697812caa6ae1930f))
- restore isInitialized ([654062c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/654062caeda8dd2c8b01717c2cbabf13ea8e246d))

## 2.11.3 (2024-03-18)

### Bug Fixes

- reset iframe reference even if it already exist, and restart queue ([8bbb0c6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8bbb0c6bc3ed7d279de34f5109585db87e676276))

## 2.11.2 (2024-02-21)

### Bug Fixes

- fixes bug where provider.request opens a connection and `this.toEstablishConnection`; opens too ([8c27041](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8c27041eaac5224cc046066dffb5aeae75da4a70))
- implements synced expiries for proposals and session request ([385e27a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/385e27a24b10c7bdd2a16fec4a069492672c2fed))
- socket management on slow networks ([cf7da90](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/cf7da90020981b1be0a3b23048e4a57e8cbdadbc))
- unique request result ([4a04efc](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4a04efc8fcf8247f116b4deef2f341eea6c0c34b))
- uses unique watch label for each topic ([995f7cf](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/995f7cf0b4f4de4aea2482b399415176d4de3f9e))

### Features

- adds publish resolve log ([383c24f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/383c24fa97f911f9cbc32d55bba5f864c37df79e))
- adds transportDisconnect ([eccd98a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/eccd98a40b9da80f83512a425a539ac9e56ce779))
- control subscriber directly instead of with events ([f79203a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f79203a3c156b8af2755bddf2cb1edad4ee659cc))
- more transport tests ([5e0c572](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5e0c57247cf97d91bd38c4b6031ac3bfc88d823a))
- tracks requests in flight before closing transport ([0e7ab6d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0e7ab6d6ac32990ffca4f9862690209aa02efdbc))

# 2.11.0 (2023-12-21)

### Bug Fixes

- uses `isomorphic-unfetch@3.1.0` ([195a003](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/195a003c12d2d6271c0c17b27b06d4dba622e411))

## 2.10.6 (2023-11-29)

### Bug Fixes

- **deps:** update dependency @walletconnect/jsonrpc-ws-connection to v1.0.14 ([a45e2b5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a45e2b516f3fd89649879ec14382b42cac151f88))
- subscribes to pairing topic after storing the pairing ([4e31288](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4e3128831b6edec76aba25fcea464bc7c4bfd4ea))
- throws when URI is provided without relay-protocol ([5e95559](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5e955591bde8cddaf1f1ece1d24c6453bd089d6c))

### Features

- implements `registerDeviceToken` in `Echo` ([19598a8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/19598a8e8553c1fb97ec186c698affbdcd03dcc5))
- added native module to get bundle id and check installed apps ([f8fd320](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f8fd320d8af5c1a3064ed42f5adb200a6fac1f44))
- adds additional uri validation for `symKey` ([5a9d13f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5a9d13f2d391d24d0f679d62098733e4557cbcc2))
- tests ([93a99f3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/93a99f36c7f97bbabe48ded3018773db5c0a564a))
- tests ([5132702](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/513270244c1cb8fbaf899cb343d5f3fe86830451))

## 2.10.4 (2023-10-24)

## 2.10.3 (2023-10-23)

### Features

- adds tests ([f7d3a7f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f7d3a7fe2dedc461daf99d27c7ae6fde1d0b3e4e))
- locks verify `resolve` to list of trusted urls ([0d42d70](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0d42d705f658f4da031fc69cb3411ab77b8b976b))

## 2.10.2 (2023-10-07)

### Bug Fixes

- fixes bug where `relayer.subscribe()` hanged on concurrent calls ([9998204](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/99982049eca88b833be145d92ee7a98e94f7fdd6))

### Features

- adds `customStoragePrefix` option to Core ([#3688](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/3688)) ([ad84a5e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ad84a5eaebe61165d1034d3303266b090c60acce))
- adds tests ([92d4f6a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/92d4f6a5d73fbe65455c46c914f6bd1234acd12e))

## 2.10.1 (2023-09-12)

### Bug Fixes

- adds a disabled flag when both main & fallback url fail to load ([d70b0d1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d70b0d17bca58803eeb9c8862aadba60f9687402))
- adds safeguard against overwriting keychain values ([06e6c1b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/06e6c1bb36251b1bdc15d417adeff6824c8caf35))
- implements verify queue while the iframe is loading to ensure all payloads are posted ([2bf834e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2bf834ec528f5e4449a708e2b44fe66f7db00bcd))

### Features

- adds `isScam` prop to verifyContext ([f62adf7](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f62adf7f6242810bce6d9614126979bc1ef6de27))
- adds network connection safeguard to several sign methods ([229517d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/229517d57db7d35d8efb66bd784655d4beb8558a))
- implements iframe fallback to .org ([e931e95](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e931e957876a291b5272e73364078323e998e6a2))
- implements resolve attestation fallback to `.org` ([b3f9bc6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b3f9bc6685ddf6fcc124c87a35f93beeff84ec5a))
- reworks pairing api pair method to throw only when pairing exists and is active, & emit event on pairing created ([eda71af](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/eda71af6117b06d426a70735ca4a040c1eaa3d89))

## 2.9.2 (2023-08-01)

## 2.9.1 (2023-07-20)

### Bug Fixes

- adds try/catch around crypto.decode ([979968e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/979968ea1c1d8ae87053420318a757c9508cade4))
- **deps:** update dependency @walletconnect/jsonrpc-ws-connection to v1.0.13 ([#3035](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/3035)) ([4ee518c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4ee518cf58b7aa0c59289999e7443918b9d14706))
- **pairing:** avoids redundant work on ignored message ([1ab2774](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1ab27747cf852fa4aab6ddf9e20c1004c4af799a))
- **relayer:** handle invalid messages, augment with context comments ([9a4e639](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9a4e639a41fe008b9c5e7820f657047a59530b69))

### Features

- adds detection for connection ([37b3320](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/37b3320bc5f72aa6f7b6e7a93d95296eaa4d65f6))
- implements subscribeToNetworkChange ([09adb88](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/09adb888035e0aa0c3bb1e7a0dc41a426a01a695))

# 2.9.0 (2023-07-06)

### Bug Fixes

- **deps:** explicitly set `jsonrpc-ws-connection` to latest ([#2913](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2913)) ([005d8f8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/005d8f8be7255e0f1811ab5b15370d963b4e5f2d))

### Features

- **relayer:** implements failover logic to `relay.org` ([#2864](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2864)) ([48fe50d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/48fe50d31556a901a94681b2219a71f2109bc321))

## 2.8.5 (2023-06-28)

### Bug Fixes

- fixes approximate expiry to be checked in milliseconds ([9028084](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/90280841b38f70f9d9331bf30c16669107be6686))
- implements default expiry to history logs of 30 days ([0616d7e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0616d7e3331d0badcf378caaa998449877ecf100))

### Features

- tests ([10ef299](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/10ef29955928b51b4b0aeffb9b798b7ca6ef99a9))

## 2.8.4 (2023-06-27)

## 2.8.2 (2023-06-23)

### Bug Fixes

- adds a delay to queue to avoid cases where heartbeat might pulse right after publish resulting in duplicate publishing ([00d09da](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/00d09da997829d46d8df6e2fa71152042a6fc227))
- fixes an issue where `connection_stalled` was emitted for each payload in the queue ([9663922](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/96639225fc67dfe1d38eabda5b80a1ba9be2ce1a))

## 2.8.1 (2023-06-15)

# 2.8.0 (2023-06-08)

## 2.7.8 (2023-06-05)

### Bug Fixes

- avoid starting new connection if one is already being started ([14d29ad](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/14d29ad8832d4cad0ed4ecd0c70e8192f46fc055))
- checks if topic is already subscribed before subscribing ([8d1b415](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8d1b415ec3b1a0499e84864cbdadd13c6f47c9c6))

### Features

- adds `randomSessionIdentifier` to crypto that stays the same throughout the instance lifecycle ([8cd22b1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8cd22b15e05c0369be97faa586f03348c2a77626))
- adds test ([a4e0907](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a4e0907630eee5c1f537cbaa53e85c57807812ba))
- adds tests ([a3b4841](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a3b48419fbea14f93825b7eb888a7c1af32ec13d))

## 2.7.6 (2023-05-22)

### Bug Fixes

- added a constant to represent the transport cutoff of 10 seconds, and implemented it ([32f466f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/32f466fe646ba3b34c5ff5d57d293af8b0727e41))
- relayer tests ([6d5dad8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6d5dad88b34616bff82098e0b97642945091099a))
- subscriber tests ([b204398](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b204398a569254e69a0847fcb7ea6c02ee21a720))
- unhandled exception during test runs caused by promise being rejected with boolean instead of Error ([a66b7c1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a66b7c1be21482bb842e17fbc46d76586caa66e8))

## 2.7.5 (2023-05-17)

### Bug Fixes

- added a check in relay init to disconnect socket after 10 seconds if not currently in use. Added tests to check ([40ab19a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/40ab19a614de7150191967cdf7f0f9a961c097f1))
- adds a check for react-native env on verify api ([290ccf3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/290ccf3662840deb9a4d0b0faad70409140598ac))
- attempts to resolve origin only on 200 response ([ab37b1d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ab37b1dbb468f012c58796bc39d99a7e111f913c))
- await disconnect event only if theres connection ([ce8329e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ce8329e61df7234eeb6f30aea5751dd3828c82f5))
- **deps:** update dependency @walletconnect/heartbeat to v1.2.1 ([#2204](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2204)) ([82500d0](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/82500d06c2be75c2dd341d5e0f3c2df919df0b7e))
- gives socket time to close before restart ([4bc5a6c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4bc5a6c4ff4fd3efea80d12f01566a1ebb327a46))
- resolves a case in firefox where rejected iframe causes the promise to get struck ([b896128](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b8961281e9bca7fd24cf8135cdaf851473118f1a))
- session approval race condition ([#2395](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2395)) ([6ef2258](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6ef2258ea039a9fb7b8162a47a6ed8cf6571b6c1))
- wait for disconnect of previous connection before enabling the new socket ([ba0d1b1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ba0d1b15c2280f70e6e8817f75be0696bb2c2de5))

### Features

- adds publisher tests ([b9de212](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b9de21280dfce06ba8f225146fdda383b2c834a3))
- adds test ([9b02427](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9b024274d43c6e8d2498e497cb327b8ec8db2458))
- adds test cases for transport restart ([79ab089](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/79ab0895c0f4880f0197b9020f10f43031f12581))

# 2.6.0 (2023-04-03)

### Bug Fixes

- adds `!` ([1f5430f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1f5430f4b9f65efcd6d5b278e8777c81c33746f8))
- avoids double `formatTarget` calls on delete ([4c17de7](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4c17de7777839d704649b2427db6be132ce34db1))
- avoids emitting expirer events when the connection is down ([1a11b67](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1a11b670b59d9feefbb56eceaa795ea3b91510b4))
- avoids restarting transport if explicitly closed ([8934fba](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8934fba527caaf16bc233319d12e114dc52276bd))
- avoids running verify in tests ([790f870](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/790f870513dcb968c2598cc15a66cc467d58ef06))
- await subscriber to resubscribe to its cached topics before releasing transportOpen fx ([405ab5b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/405ab5b4d01bd622af3a79e5df4baea8b98335ab))
- catch `socket hang up` ([38dbafe](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/38dbafe4514b1dc12c61ecba93c92cf32a75c1ef))
- catches correctly `socket stalled` rejection ([bd261b4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bd261b4b8f94685dcc9c809c417cc67b4a3fffce))
- check if relay event is related to a pairing topic ([#1839](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1839)) ([a30a3fd](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a30a3fd6b2aef607df9ca9c38d6db24806a66f45))
- clears interval ([cc9389a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/cc9389a6844d6b67347d137c7f6fd2d916d4b665))
- **core:** ensures `core.relayUrl` property is assigned ([#1951](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1951)) ([a305115](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a305115dbd68d37aff5079dcdc778fdb926347ca))
- **deps:** adds missing explicit `events` dep ([d2663e1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d2663e1292ae7c09aa8ab67404c54c1bfa82d9dd)), closes [#1659](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1659)
- encodeISS crash - Buffer is not of Uint8Array type ([6314437](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/63144373e252b503e69110316e83fa58eed85d26))
- Fix typos ([#1853](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1853)) ([b090551](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b0905512b2434d55a59b10ea46b368a1c209b236))
- gives priority to store with custom `getKey` ([bf7da78](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bf7da7816c59ab3b04377a0cf79e7366447f701d))
- handles null value ([8538a9e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8538a9ed86fc831df1283a3b139418befb0f8639))
- implements an await mechanism when `subscribe` is called before the subscriber has finished restarting ([651734f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/651734f2d02bdf60ea618963869670a355e709a5))
- implements connection recovery and moves all `.request` to be managed by relayer ([57e1e11](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/57e1e11d01ba3a56fb1a90da561187a64286d706))
- moves promise rejection in a named function so we can remove listener when needed ([f38d395](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f38d395b3caa3c49952bf2abe8b152844c616f87))
- removes pairing delete response ([ee5c034](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ee5c03458c8b722bb217301dd4fa53bb357cb638))
- removes setting `this.initialized = false` ([0f8352f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0f8352fcc5e726aabe544cbdecfebb00179dd128))
- stalled connection in CI ([#1758](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1758)) ([0cdf2a2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0cdf2a2bd2008dd7feab86ab4bde6b975f536235))

### Features

- adds `verify-api` tests ([9e7ae2d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9e7ae2d03b372f544d5c10bf88ba50e13faf9723))
- adds a integration test for `not initialized subscriber` ([476a4f0](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/476a4f089100629fc0392819088d9f824c16d045))
- adds additional stalled connection errors ([c71a6cf](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c71a6cfb66119df32665ec4cae7a88e8d58c00f3))
- adds core persistence test ([c01b79c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c01b79c6a6515504735e95a165c92953df393002))
- adds expirer test ([83a9c4a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/83a9c4a0083ceb4ba45113c51cbc00114c5e4065))
- adds random client seed ([d869357](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d869357be468ac57d853eb0a6789242993f917e6))
- adds request expiry test ([65aab84](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/65aab844c3d111b35828e0e7d16fde8204796aad))
- adds tests for pairing uri validation ([484cd79](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/484cd79d06b14bd2ad38cc17317fc33993867eb3))
- avoids restarting multiple times ([5357e11](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5357e1169edc21dfe2f5610686a11abc5a5fed64))
- **core:** adds `getPayloadSenderPublicKey` method to `core.crypto` ([#2155](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2155)) ([28e4620](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/28e46200c8429d0041df24523006bea7a140e497))
- **core:** emit publishedAt as part of relayer MessageEvent ([#2036](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2036)) ([0662cac](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0662cac6bdf729a0b8500a76d409e3d33b4f1a5e))
- implements `irn_batchSubscribe` ([95b4fbc](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/95b4fbcb5fd26219b3dbbbcffb436094732d1806))
- implements batch subscribe with max limit per batch ([2bf081c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2bf081c429b3a3cf3389600d973bdd957de2c912))
- implements idempotent ID for subscriptions ([9e8e4ac](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9e8e4ac07ea16af696ab392fdd27f4d4feb60647))
- **relayer:** surface abnormal websocket close reasons ([#2096](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2096)) ([7ee2091](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7ee2091c3c28ac2a035dba52b6ad5f968e32276a))
- **scripts:** auto-update RELAYER_SDK_VERSION as part of `new-version` ([#1731](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1731)) ([55ac00a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/55ac00aa96a322c8a229d841ee262bab81818c91))
- throws when pairing is attempted with topic that already exists in they keychain ([d09bb7e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d09bb7e1e7af377f0202ea66a9e48562b61deb62))
- updates json-rpc provider ([97a5713](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/97a57131896ecabd81ea8f5fa0f24f93b3ab05e2))
- uses transportClose for socket disconnect ([c37bab4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c37bab4ab17812fa7c6b91df1b2809ff4f7a9cd8))
- verify-api ([48c638f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/48c638f07ced1bd4f3616f76259b26d6870dc8fa))

## 2.1.3 (2022-11-14)

### Bug Fixes

- adds a `restart` fx to `subscriber` that resubscribes to its cached topics on socket disconnect/reconnect ([543ab05](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/543ab057a0dfba2ba303c0e9f24d1a9109d7e952))
- **deps:** ensure pino import resolves at runtime ([#1635](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1635)) ([160de28](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/160de2820c5b6370191ed43ede306c32a0d050f8))
- uses the already assigned relayUrl by default on `transportOpen` ([04e4d9b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/04e4d9bb70530b1bc02d8558be9f021be065795c))
- when using `transportOpen` `core/subscriber` must be restarted so it can resubscribe to existing topics otherwise it fails to register incomng messages ([c9899c5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c9899c5794e9a26d2c74cd20ffe809587c6cb434))

### Features

- adds the ability to close/open the socket connection ([321b7af](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/321b7af3ee5b5e6725c66cc66085e9a2753abbae))

# 2.0.0 (2022-10-24)

### Bug Fixes

- adds await to throttle ([3c860ba](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/3c860ba1118783e0d8131f83358859f293969aa7))
- **core:** fixes missing `isInitialized` check on `store.getAll` ([#1523](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1523)) ([ec6360b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ec6360b55ad0f4e8b850ec23e0f0fd92d4f8bc1f))
- override events on disabled sockets to prevent reconnection ([bea9010](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bea9010e2cfa2d1d128262066a43f33c0aa5e79a))
- properly disconnect sockets during tests ([31cfc08](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/31cfc082be40283c603114c71a0e52aaf7e345c2))
- **tests:** ensures expected test env vars are passed to Relayer ([#1412](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1412)) ([5dd8f5c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5dd8f5c6a3e5a0235dff3c09654bbfa1fbb25330))
- typo ([deebc9e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/deebc9ef3247e45d79f161578e3086da46e69f55))

### Features

- disables heartbeat when disconnecting sockets ([bc56704](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bc567046087daf298235dfa0d88baf7a2e99e99d))
- fire disconnect event along with ws disconnect ([c93848f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c93848f8d89a493a3fe46f612024a70d9526467f))
- makeshift disconnect ([4d0f532](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4d0f532d73bc25be6dda6f4de10bb72391ad1607))
- Pairing API ([#1536](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1536)) ([bc6f663](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bc6f6632b7c665d868bcd59669281c1ead2dd31a))
- try catch to reconnect ([229440e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/229440e06a171a614dc2f0220fd6d88b2101f2e5))

### Reverts

- Revert "chore: log in console instead through logger" ([f94cbdc](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f94cbdcd06ba352d3ff92e8ce5b784880df718f4))
- Revert "refactor: uses disconnect event" ([8709b64](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8709b64ba9406a4f697e2c6df2ca986e9b5aa41b))
- Revert "refactor: reuse core in subscriber tests" ([a39cf7a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a39cf7a4f5fc1f916cf89b9db088d7980e5571b1))

# 2.0.0-rc.2 (2022-08-15)

### Bug Fixes

- waits for pending subscription to resolve before processing an event for the said subscription ([bdf6c63](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bdf6c631f1ff0552795513bc44e21dc38339293b))

# 2.0.0-rc.0 (2022-07-18)

### Bug Fixes

- **core/publisher:** adds tag & prompt properties to rpcPublish method ([c124b91](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c124b91b7130bf19f03d220b94cd02365cba84e1))
- fixing tests to include `tag` property ([f01333c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f01333cc85ac8cf0d2b43fae5e8e3933712a8367))

# 2.0.0-beta.102 (2022-07-07)

### Bug Fixes

- **crypto:** fixes `generateSharedKey` param ordering in `decode` ([6604dd5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6604dd5b6853199333e85623029d78538b8aca9e))

# 2.0.0-beta.100 (2022-05-30)

### Bug Fixes

- **core:** adds missing init checks on crypto controller ([369525f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/369525f542d7bdc1160e10e2ea29499af601da8a))
- tweak core storagePrefix usage after v2.0-rc rebase ([5ee1cd4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5ee1cd4a26c4b7d6dec3be06644c4d4aa39d98f4))
