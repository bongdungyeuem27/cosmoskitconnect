# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.3](https://github.com/bongdungyeuem27/cosmoskitconnect/compare/@cosmoskitconnect/sign-client@0.2.0...@cosmoskitconnect/sign-client@0.1.3) (2024-12-25)

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

- 1CA tests flakiness ([54e478d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/54e478d1aaee934b59e9db2d9898f444847d8e58))
- batch fetch messages ([d11e623](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d11e62349e0b3e57cdce360c9dbb3a07cca0bbfd))
- promise handling ([e1b4528](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e1b45285e70489b444ecf2d0c9b4956e669b6c20))
- tests ([843252f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/843252fb11239c510c8decb20b8645ad2727bd51))

### Reverts

- Revert "chore(deps): update node.js to v22 (#5471)" (#5479) ([f5c0f2c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f5c0f2cf5910ed90c219e586d2604d4d537143ac)), closes [#5471](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/5471) [#5479](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/5479)

## 2.17.2 (2024-11-05)

# 2.17.0 (2024-10-01)

### Bug Fixes

- unchecked access to `process` global variable ([926b2fc](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/926b2fcc421f1a2d013c93453608bd5a7411a2d0))

### Features

- tma deeplink compatibility ([f38c00b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f38c00b90d96268b4e80432e5307436d68354194))

# 2.16.0 (2024-09-06)

## 2.15.3 (2024-09-05)

### Features

- verify context for link mode connections ([7ecf216](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7ecf216c5b96469445e8a14fb8c0b58449b1479d))

## 2.15.2 (2024-08-30)

### Bug Fixes

- added missing connection check in approve method ([2f79d7e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2f79d7ee18a99bf05386dcc271b23b9611e9a079))
- avoids fetching verify attestation when via link mode ([c42db5f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c42db5ff3388ddc8d47497c6459102da55b13266))
- incorrect merge ([21f4775](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/21f47756aa32871905c3b655200822f8251952e0))
- validates jwt id against encrypted id of the particular request ([b138715](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b138715223dd5832ea34d3c53e27d7d8900102a9))

### Features

- offline subscribe in link-mode ([92d8b83](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/92d8b835754f86d0e6f38af9369231575dd3c37d))

## 2.15.1 (2024-08-20)

### Features

- client no longer starts wss connection on init unless there are cached topics ([73cff35](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/73cff35aa36e64dd2fa422943de2c4d103f3c420))
- link mode test ([ad21d51](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ad21d51171c3bb81204b30bf486eb6426d105ef5))

# 2.15.0 (2024-08-15)

### Features

- verify v2 ([d1966d4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d1966d413e749a98633658e86093942dc7556a22))

# 2.14.0 (2024-07-17)

### Bug Fixes

- adds `shouldClearNativeTimers: true` ([5331f39](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5331f390bb5477256d249ba11bd0155da965b897))
- adds encodeOpts to auto error response ([72807d4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/72807d4870da86400f8de3e6f9688c3ea244d30c))
- error smg on missing proposal ([0c970b9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0c970b9933b4e9335fc7fea2d83583703a9ba5fc))
- handles incoming requests one by one ([620801a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/620801acc6178e2db9e6d96ef8ba74e0583d68a9))
- request queue state reset on pending request delete ([cd98a63](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/cd98a63cbd61954b0e071afd6ea8af3aba0768b8))
- **tests:** force close transport ([d811a33](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d811a33d75ba832e19aef1cc4720ecad8559f8ea))
- update requester and responder pairing metadata upon sessionAuthenticate approval ([#4614](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/4614)) ([9702919](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9702919dc33fb36c9395f02790b2dfe689c13aee))
- url validation message ([b37c81c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b37c81c9853340af8a4dba9900f42a6f9e4a5b1b))
- validation order ([90cd4fa](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/90cd4fae45675dad3429ade837de03bf6004488b))

### Features

- adds `signConfig` with `disableRequestQueue` param ([86493a2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/86493a23dc9ef0e67bfc8966e28da0cfe569ea1e))
- adds `wc_sessionAuthenticate` to methods to verify ([be9e140](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/be9e1405f120b998af4e71a7163e07dea335f8b2))
- adds rejection tags on session propose & session authenticate ([32f28df](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/32f28df5e0fdadc402d071e8e090fa3499c703d4))
- adds test ([c21a7d5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c21a7d5ac12dc4e278ca2ae78f6c5da919bd44fb))
- adds try/catch on `sessionAuthenticateRequest` and auto responds with an error if there is an exception ([6975267](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6975267e359b212f4fc1a593440766455ba2821a))
- adds verifyContext to session authenticate event payload ([075bcb9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/075bcb92b92c118f537884d899aaeedd0379f195))
- events sdk ([2ba4208](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2ba4208c9120e2be7014cdeb796a96214d9f11bb))
- implements relay message cache for any messages that might be released while client is initializing ([3444a27](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/3444a27f30c4cbd4480c6038ed47a2fefa34fd41))
- tests ([6e08f09](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6e08f09a21441cc500e0b87b9d64373a8359e4dd))
- tests ([3f9bb09](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/3f9bb0937ff57cde61fc8df947f5f43a0093b60f))
- tests ([5a00a3a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5a00a3a26bb784aaa3d79af646599204cc38d0bd))
- tests ([0f676a8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0f676a8eeb282f57d30ba5b8dd6c7f4b21f2e68f))

## 2.12.2 (2024-04-09)

### Bug Fixes

- cleans up fallback listener only on success response from `session_authenticate` ([6712b98](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6712b98631112edb605081586091cbee21900c36))

### Features

- adds `session_authenticate` to expirer ([1f47680](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1f4768071b9a8ee1d003984252bbd59c8f292716))
- tests ([0c0acea](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0c0aceade3c63bc2d7a9d36ad41b08421fcb46fa))

# 2.12.0 (2024-04-03)

### Features

- allows wallets to disable deeplinks ([739e1ec](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/739e1ec00d49bc129097c9600d822ee793117801))
- updates session without waiting for an ack from the peer ([be87b9a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/be87b9ac3c61e590bfa2e1de8122db30941df429))

## 2.11.3 (2024-03-18)

### Bug Fixes

- adds params for eip1271 sig validation ([b80e305](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b80e305c39d1fe43dd1f9c6d18ac3d6fb0dbb484))
- uses only required props by spec ([ddea467](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ddea467a4e2d03b7d914519387ee613d14ae0771))

### Features

- adds events to fallback request ([0568350](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/05683502cde336a2e5fe137113f16d8091627305))
- adds multi sig response tests ([03d00f8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/03d00f87da8e701db4ff31bccc2a58b5985bc12f))
- adds personal sign to siwe ([8b8bd34](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8b8bd345b997dd9474ddd44c98e7b7cc90f0cff2))
- adds tests for single signature response ([473f502](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/473f5022389cf472fb6b826bd7304d68e0471d03))
- formatMessage types ([0d9a9c2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0d9a9c202c75f62cd2cec84671fd7f28a64d47a4))
- implements authenticate in providers ([912829f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/912829f1321dbe96c44f8f27903eca814cf85248))
- implements single recap ([89f2b57](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/89f2b578f8d449d753606311a04761d60109011c))
- reject when auth signature validation fails ([6a3d303](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6a3d303e68a2245c2513da1db604112d197bc2f4))
- sign 2.5 to web3wallet api & tests ([e10bd75](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e10bd75327841d5ff8bb586f642137dd14a1768a))

## 2.11.2 (2024-02-21)

### Bug Fixes

- adds additional checks for session validity state such as confirming keychain exists and removes session if deemed invalid ([f0e1797](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f0e17976e97a0761d5e3f582b218b4894bacb10a))
- awaits all requests in tests ([098e36b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/098e36bb248627a2c3ecdf766f0239c52e484779))
- awaits sending session proposal before returning connection URI to avoid cases where publish might be delayed or fail ([e4d547a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e4d547acc41478f73aaa3367db2516488f92166d))
- clear the map before test ([bf2514f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bf2514fb978711e091335f6b5c4ff27a72001fd1))
- concurrency test ([420f14b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/420f14ba0e44e032c540f1f83232e5cf6a2444f4))
- emit order ([99cbf73](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/99cbf73911677eaedfac82b40e0311fb87e68368))
- fixes bug where provider.request opens a connection and `this.toEstablishConnection`; opens too ([8c27041](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8c27041eaac5224cc046066dffb5aeae75da4a70))
- implements synced expiries for proposals and session request ([385e27a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/385e27a24b10c7bdd2a16fec4a069492672c2fed))
- responds to requests in tests ([f71137b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f71137b79bf61ce012a6a790b7a70dd1bc83d386))
- saves `session` object before sending `sessionSettle` request to avoid potential race condition ([0e2d87d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0e2d87dfe038e23b9bbec768b002541165e8be53))
- session update awaits request ([cde0169](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/cde016957e5db094ee308cd50b8c0bde0de60c89))
- socket management on slow networks ([cf7da90](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/cf7da90020981b1be0a3b23048e4a57e8cbdadbc))
- tests ([41f1a71](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/41f1a7167ed3f8f4a6c834233a625aa1f94da072))
- unique request result ([4a04efc](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4a04efc8fcf8247f116b4deef2f341eea6c0c34b))

### Features

- adds `session_request_expire` & `proposal_expire` to w3w ([e1d3152](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e1d315253ff5979b6852db19898ec1576973689b))
- adds expiryTimestamp & fixes types ([992ef2d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/992ef2d3185de1864e1f56cf70cee58c1850106f))
- adds granular error messages ([efd7696](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/efd7696b375594a8cd4da971435543914aadc210))
- adds more tests ([28a9c1e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/28a9c1eae5740d81c80980845549855612dc907f))
- adds siwe test ([68977c0](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/68977c04a45fd8fcb2d5d8624d7f0b76c12eb47c))
- adds tests for recentlyDeletedMap ([6c80317](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6c80317b093aefb154c604f91c7d1fc7f63f3f84))
- **canary:** remove artificial delay ([#4174](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/4174)) ([372c355](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/372c355bd8e4e56812b7ea0e1954aff34f02462a))
- cloudwatch metrics tags ([#4172](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/4172)) ([75a7761](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/75a77612eb364990c4f2f0176432133955cc21d9))
- implements recentlyDeleted store rejection in sign ([39d6586](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/39d6586a4f46c6193261d6bdc37e547328d8534d))
- more transport tests ([5e0c572](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5e0c57247cf97d91bd38c4b6031ac3bfc88d823a))
- respond with error on out of sync update ([b4cc213](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b4cc213646d24d0a93c9806bf3e13565f5123604))
- sorts recap methods alphabetically, increases default expiry to 15m & general cleanup ([1461fea](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1461fea76406e2eb69d1c2df402d328514ddb0a5))
- tests ([bdd6595](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bdd659538d90c0bc842678876408f526e4372465))
- unsubscribes from session topic if settle request fails ([b2d98c1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b2d98c154f34bbff3e6d43c8e1389825b24c1175))
- updates wallet authentication to latest spec ([09985df](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/09985df4f883ff040795c3da9ea701d8e1f841de))

# 2.11.0 (2023-12-21)

### Bug Fixes

- captures `respond` rejection when session is disconnect & remove the pending request ([5b0fa77](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5b0fa776bdbb83c8ed3d806017a17ddbcbad6585))

### Features

- adds signed cacaos to session struct ([95bf4ce](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/95bf4ce1b5a737d96d034ada76da9d541068fea9))
- export session store from sign ([5b78ef9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5b78ef96e70794a3be98b8400c734b1b3ed92cfc))
- tests ([3bba512](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/3bba512cc8764b11be7b80b8274a1df9b55395ba))
- WIP: authenticated sessions draft ([bfbc9d5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bfbc9d59bdf1d497cb004e2317470eacb079d181))
- wip: dynamic switcher ([c1535f9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c1535f94771bd7f6b8209a7205f366fe4b2d6169))
- wip: reject multi namespace requests ([3c8398f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/3c8398f345b3eb878e5a74dd10e1153923d4d866))
- WIP: tests ([66f832d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/66f832dece8725e491c9dc4c54ea06f68d31c570))

## 2.10.6 (2023-11-29)

### Bug Fixes

- adds `session_properties` to fabricated proposal ([de409cb](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/de409cbe1d8c1a65da0b33eb1abc7ebd8972c755))
- **canary:** Canary shouldn't fail if Statuspage is down ([#3841](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/3841)) ([0a9811a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0a9811a221c9dadd6301c51af4890bb77b983732))
- small delay for disconnect to finish ([aac86b3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/aac86b312b3825a71a60eee8a7ffffc36a12dc64))

### Features

- adds fallback to localStorage if deep link is missing from storage ([25d6ea8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/25d6ea8044ec607360dd3d17ebebf280898641be))

## 2.10.4 (2023-10-24)

## 2.10.3 (2023-10-23)

## 2.10.2 (2023-10-07)

### Bug Fixes

- adds explanatory message when session request is rejected due to expiry ([4a38b23](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4a38b234585c23bd1aa081048d5b0907f270fe77))

## 2.10.1 (2023-09-12)

### Bug Fixes

- adds a disabled flag when both main & fallback url fail to load ([d70b0d1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d70b0d17bca58803eeb9c8862aadba60f9687402))
- compares `metadata.url` origin to verify attestation origin ([6a8131d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6a8131d4e594530aec85afd44668ced595289811))
- fixes an issue where request queue was hashing the payload but missing `jsonrpc` version & `method` params resulting in wrong attestation id ([2dc489d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2dc489d40d719ea85d2d70efc9a1618975e59a68))
- implements queue of all incoming requests to avoid issue where multiple session_update/session_event can be processed at the same time after init resulting in bad state ([08f0a19](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/08f0a19d9bf58af9f9adca351b3a2c6abc049f2f))

### Features

- adds `isScam` prop to verifyContext ([f62adf7](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f62adf7f6242810bce6d9614126979bc1ef6de27))
- adds listener for `pairing created` and handles pending proposals as if they were received from the relay ([b3d489b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b3d489b3aadb0b87b0e94f1f30c99c8053e3a153))
- adds network connection safeguard to several sign methods ([229517d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/229517d57db7d35d8efb66bd784655d4beb8558a))
- adds tests ([c84ee55](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c84ee55c3c9e896bc9609b0198c8830440ed0a8e))
- adds tests ([b7e5098](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b7e5098bb9191de4856c985b653db56ee02dba62))
- uses `verifyContext` from pending requests instead of doing GET req every time ([e8610e7](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e8610e782dae7b1b5611796291222c5d6444ac2f))
- validate topic exists for echo in tests ([#3529](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/3529)) ([f1ac930](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f1ac9302689669e57bbb4b1ebb376a01a9e7a53d))

## 2.9.2 (2023-08-01)

### Bug Fixes

- removes deep link choice on session delete ([82484e7](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/82484e7356aa2664c9a8b72f634318340722abd8))

### Features

- adds tests ([deed5a9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/deed5a986214fe5aefdd3cbeaecd5b1b04114f4a))

## 2.9.1 (2023-07-20)

### Bug Fixes

- rework `request` to avoid case where response is received before `done` is awaited ([5898ba4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5898ba4254068516d3e638c35e0f143015d80cd2))
- sets queue to idle when request is deleted by the expirer as responding to it would result in an exception ([a25d8af](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a25d8affa3baf8878cc15acda81389e0ac534fb4))

### Features

- adds detection for connection ([37b3320](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/37b3320bc5f72aa6f7b6e7a93d95296eaa4d65f6))
- tests ([eb57d61](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/eb57d619b268429e67774f02c7cb16e67bc8db2b))

### Reverts

- Revert "chore: skips test" ([2ca2e78](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2ca2e7838b529f0fd8a208093e5df23f3c16e3b4))

# 2.9.0 (2023-07-06)

### Bug Fixes

- **deps:** explicitly set `jsonrpc-ws-connection` to latest ([#2913](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2913)) ([005d8f8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/005d8f8be7255e0f1811ab5b15370d963b4e5f2d))

## 2.8.5 (2023-06-28)

### Features

- adds tests ([777a74e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/777a74e52743c1865bdf6be7ce92f197d06f9ffd))

## 2.8.4 (2023-06-27)

## 2.8.2 (2023-06-23)

### Bug Fixes

- checks that `session.pairingTopic` exists before cleaning up duplicate pairings ([4e3657c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4e3657cc3caf8448e7ecfa60fe9bbfb6f82a0639))

## 2.8.1 (2023-06-15)

# 2.8.0 (2023-06-08)

### Bug Fixes

- checks if data exists before delete ([8997c25](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8997c256b87eb85cad60a8d25109b090b2b58b04))
- **engine:** handle payload that is not identifiable request/response ([#2182](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2182)) ([b11127b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b11127b8082bcb8f7af90c20a53c368e4428932b))
- incorrect `if` with `topic` instead of `self.publicKey` ([87abf3a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/87abf3a7284ecf6cd99fce6f1aabdc66318c84d5))

### Features

- adds tests ([8a7c15e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8a7c15e14b98713f4f682872637f04bfe041e566))
- awaits relay ack to release session disconnect promise ([b2b936b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b2b936bee32ca0064a11767ad0fd9bd67e9bea5e))
- **Canary:** do not report latency of failed runs ([#2561](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2561)) ([466ab7e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/466ab7efbde27b77ac2d955984ceeda8816af029))

## 2.7.8 (2023-06-05)

### Bug Fixes

- **canary:** failures not reported ([#2523](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2523)) ([dd1eaf8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/dd1eaf871004898f6d4c5f68c5eb65e4709543ad))
- fixes incorrect filtering for duplicate pairings ([1341d9a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1341d9a45609c2f3821a8f5d5a15974a11ba8ec4))

### Features

- adds tests ([b83b8a9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b83b8a98c69fe3b35570cf78fe0e1cd427ca199f))
- adds tests to sign client ([2a51ac2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2a51ac241f705f64edbb802d96fb67d00172025e))
- **Canary:** more logs around Cloudwatch ([#2508](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2508)) ([c362e1c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c362e1c4175e7206838b2e84bfaf7fe53a5f520b))

## 2.7.6 (2023-05-22)

## 2.7.5 (2023-05-17)

### Bug Fixes

- avoids removing pairings when peer url is not defined ([480f346](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/480f346725cffaf454935c410e7c79c0cfdc5378))
- **deps:** update dependency @walletconnect/heartbeat to v1.2.1 ([#2204](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2204)) ([82500d0](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/82500d06c2be75c2dd341d5e0f3c2df919df0b7e))
- **deps:** use non-caret explicit version for heartbeat ([#2206](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2206)) ([9c1f7b9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9c1f7b930c65c9b2467d45d32bffbd41645012e5))
- only set validation if origin is received by resolve ([8d9ac6b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8d9ac6be217268d5a07074a8951f24fb0af7df1b))
- removes session from storage before emitting `session_delete` event ([3b3a53d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/3b3a53d66e43466ec3419c6175e7a9ef8a53a500))
- session approval race condition ([#2395](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2395)) ([6ef2258](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6ef2258ea039a9fb7b8162a47a6ed8cf6571b6c1))
- wrapps try-catch around `verify-api`'s resolve fx ([8423013](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8423013578a31464490eb740da1bf6be9dbc7a01))

### Features

- adds dedicated session ack test ([15830aa](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/15830aa52c46370e1a59c21d02b2a832aa6ac610))
- adds test ([8473ae1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8473ae17556d9411dce28d2ec968139337de2d7b))
- cleans up duplicate pairings with the same url origin ([52450bc](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/52450bc73b02fdfc26b09e345b4c37e9d43814c4))
- optimistically resolves `approve` ([bb21917](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bb21917240f1c33eb164341d0d8ca5d927eb917c))

# 2.6.0 (2023-04-03)

### Bug Fixes

- adds type `update` params validation ([5159377](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/51593772e79487e3000329911865ded488b0af16))
- awaits deleteClients in push tests ([4d6c3f5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4d6c3f5f1e9fc06e642204238fac0be078459252))
- awaits publish before deleting session ([289d2ee](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/289d2ee28fd97241752688ccc74895c6e1d5b127))
- checks for undefined ([99df1d8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/99df1d826aea02e15dac17a788bc04608d64d38a))
- correctly calculates expiry of pending requests ([f8d7e85](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f8d7e8548281b7481057f30d47084490140be202))
- **deps:** adds missing explicit `events` dep ([d2663e1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d2663e1292ae7c09aa8ab67404c54c1bfa82d9dd)), closes [#1659](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1659)
- disconnect clients only if initialized on retry ([b8738f2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b8738f2619395d581458c7bda209532645c9ce77))
- disconnects clients in sesion extend test ([b95100a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b95100af86fa3b49c17775045578a359bd995c84))
- don't litter test output ([#1722](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1722)) ([06de185](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/06de1855fd7e681d950722ac7102e91a3cfe823b))
- **engine:** adds missing emit for `proposal_expire` ([#1898](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1898)) ([a53238e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a53238ed66ba3f3e63de93d8cf6187eda9b672ce))
- Fix typos ([#1853](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1853)) ([b090551](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b0905512b2434d55a59b10ea46b368a1c209b236))
- **pairing-topic:** remove pairingTopic from BaseEventArgs and fix value assignement on connect ([7e7664c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7e7664c4a2e3b4c7fb565640e26c626a66e70bbc))
- rejects pending proposal with an error instead of `undefined` ([41c35d8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/41c35d89f9dfa67e4b59480ccbe545d656a2a686))
- requiredNamespaces validation when provided ([c45d918](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c45d918a3b7d3fc886fbfdd9c2638db92ef7d8d0))
- resolves issue where namespaces were not validated correctly ([e9ee18e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e9ee18e5a26287334effad17a3c917f551ddabfa))
- rm trailing `/` from xregion enpoints ([cb57cd5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/cb57cd524d0271bb2e48fe7b35b8ccf3e19c2415))
- set `getKey` to pendingRequests to fix issue where only 1 result was returned from `getAll` ([9e603f4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9e603f449985ea6f5ada45e7aa3be4a467ee7b40))
- stalled connection in CI ([#1758](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1758)) ([0cdf2a2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0cdf2a2bd2008dd7feab86ab4bde6b975f536235))
- uses optionalNamespaces from params ([2647f9e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2647f9e0a5e2e48eb0e5c83482d5dcebdfb0641b))
- validate optional namespaces ([ad09b75](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ad09b75de3299f59ea7449490a3b3d267bc32a03))
- validates only optional namespaces that are in use ([b039628](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b039628ef4123c545bb09b65a6ff11fe9ad4af4d))

### Features

- adds `getPendingSessionRequests` to `sign-client` ([36ba4ba](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/36ba4ba626cd907a2facef08365f8e3596d20074))
- adds `id` to session_request_sent event params ([87f8994](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/87f8994d3f1e4db8cc33a498c28bb0bea220e9c9))
- adds `optionalNamespaces` tests ([0af9005](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0af90055fc4e27e9c42d501959a2ffbca2689ad5))
- adds `session_request_sent` ([66f390a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/66f390aee5c91990888f7b8a216aa125033b63b2))
- adds `sessionProperties` in tests ([0e80077](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0e8007700bc0d675326241b98474863bccda8ce8))
- adds an optional expiry param to `createDelayedPromise` ([7716998](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7716998cbe03d5dc69ac5dff27bda419a7691350))
- adds optional `chains = string[]` to session base namespace ([ef11e84](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ef11e8475e6e3d3099f13526200e18396b860e6f))
- adds optional request expiry ([c1d77d5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c1d77d5f9ebc186f74650959e9019b7d584ff118))
- adds pairing topic to session ([bfcb0c0](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bfcb0c0b105a6265855bdd4f928935b337c26d3a))
- adds pending request to expirer ([831a448](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/831a448ec416f6819db39a4082f148c82c3b17b2))
- adds request expiry test ([65aab84](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/65aab844c3d111b35828e0e7d16fde8204796aad))
- adds test for empty required namespaces ([8f8d3f3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8f8d3f36cd13e95d044d3db02ce5cbb00fc5aa1c))
- adds test for inline indexed chains ([cb2bbd5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/cb2bbd57c29a9d7a9108aeceb61a3170cae06857))
- adds tests for namespace validation ([531205f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/531205f2a704a511db35154067da552cad592eee))
- adds tests for pairingTopic in session ([4f220e3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4f220e33ca36349aa2050e1e9e35eb13a5be0140))
- adds validation test for request expiry ([050e7d0](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/050e7d007025a9072bdd261651e1b1518e6edfa8))
- **core:** emit publishedAt as part of relayer MessageEvent ([#2036](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2036)) ([0662cac](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0662cac6bdf729a0b8500a76d409e3d33b4f1a5e))
- empty required namespaces ([8e02fe8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8e02fe87b802689dcc6611411ed88fe515ab954a))
- Implement Eventemitter#removeAllListener. ([#1762](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1762)) ([2d80e19](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2d80e1941e23b41abc2ae46c145322eb2277c7b0))
- implements `irn_batchSubscribe` ([95b4fbc](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/95b4fbcb5fd26219b3dbbbcffb436094732d1806))
- implements `sessionProperties` ([4d65188](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4d651887eafad1be8f198d3c86637f611a5880a4))
- implements `verify-api` in `sign-client` ([f59e129](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f59e1290954411f12f5a894b3ee3761cca560149))
- implements optionalNamespaces as per caip-25 requirements ([5466fc5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5466fc5492193172dd1f2ab01333002530828ae0))
- improves pairingTopic test by comparing client A & B sessions ([86a0f44](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/86a0f449f3e7fed9354f2f5eb93ff8fd69a2032f))
- increases connect timeout ([1215954](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/12159543e578da5387688701763d309c59ec3f17))
- pending requests + test ([259dbe2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/259dbe2b2a8cb056e80b518f98b22a9dfa5c7d73))
- re-enable webhook tests ([#1717](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1717)) ([2d44d2a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2d44d2a1d3ca53f6c9dd9129a7c03c71cbaf3020))
- reinitialize clients on failed connect ([6f8b9f1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6f8b9f191c4e6f64460af238d8e5e2119ff26d96))
- **relayer:** surface abnormal websocket close reasons ([#2096](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2096)) ([7ee2091](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7ee2091c3c28ac2a035dba52b6ad5f968e32276a))
- updates json-rpc provider ([97a5713](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/97a57131896ecabd81ea8f5fa0f24f93b3ab05e2))
- uses transportClose for socket disconnect ([c37bab4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c37bab4ab17812fa7c6b91df1b2809ff4f7a9cd8))

## 2.1.3 (2022-11-14)

### Bug Fixes

- close transport on x region & lifecycle tests when done ([137a713](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/137a7130254e77fddea0e5b37d7c7ced4ef93be2))
- **deps:** ensure pino import resolves at runtime ([#1635](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1635)) ([160de28](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/160de2820c5b6370191ed43ede306c32a0d050f8))

### Features

- adds a test for `transportOpen` `transportClose` ([50b3d7a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/50b3d7afd96f4ac6647b0766aceae59a269bbc91))
- adds test for delayed usage between `transportClose` `transportOpen` ([055d7e3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/055d7e340a8c1c7277811272d0a18edd25512b0c))
- **o11y:** integrate with statuspage ([#1585](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1585)) ([9d62fb6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9d62fb6b1e867e0aa0bd0e3302ad1ad440998f62))
- **test:** cover reconnection lifecycle ([#1599](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1599)) ([77a65f0](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/77a65f0ee4f8739cb068312f6ded77311b83431b))

# 2.0.0 (2022-10-24)

### Bug Fixes

- adds condition before deleting clients ([bb12391](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bb12391349fd3294065a1fae3ae3402548e75ddf))
- adds timeout on `session_ping` & `pairing_ping` to avoid race condition where the listeners for these events aren't yet initialized ([f360f88](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f360f883b14061672955f42cbdd99e383f090fc6))
- await events publishing in tests ([e6ef527](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e6ef527889466aaa70cbf65d324f53e0c6248ba3))
- delete providers events on close ([8cf4cbb](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8cf4cbbf4c7df1ddf417b9e158595beb80ba2d6c))
- disconnect `beforeClients` correctly before attempting to create new clients in persisted storage tests ([7bc2e1a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7bc2e1a0e7d940bb6cd7d439907dba13cda580b9))
- disconnect sockets on init tests ([29ca6eb](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/29ca6eba856e873b8d9da251b9e2a97f275cea98))
- **engine:** avoids race condition when deleting pairing/session ([#1408](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1408)) ([9f55c9a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9f55c9acf010b6c5166f11089aa243d34039b0e9))
- **engine:** avoids unwanted expirer deletion attempts post-expiry ([#1459](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1459)) ([749c186](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/749c18678ffeb6b8d7a91805c097ed0c0cedb0b5))
- **engine:** ensure proposal/session expiry is calculated dynamically ([#1424](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1424)) ([4bd5f77](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4bd5f77551b46eb1b3dd80371d2abd63f3d25cc6))
- **engine:** ensure requesting client sets own record pre `sendRequest` ([#1411](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1411)) ([63f24d6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/63f24d6dc7850901294446864af1496b7d4cb763))
- fixes throttle usage with viUtils ([2ef82a6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2ef82a6a5844c3ab66f3ac96e435fad631f39b61))
- if clients ([d32ee9a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d32ee9aab9ef671c8abf80e9a93094b64d565b20))
- makes `.core` optional ([1ba3888](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1ba3888b3f48bd354b64d33619e5fa4cf751b006))
- not filtering out unsuccessful values ([#1393](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1393)) ([cc3400b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/cc3400b3a50bbbb6f2d5d6f6dd91d0a54139e2a1))
- override `.provider.connection.events` too ([bb80c36](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bb80c36728865ae9666f68a8dd4c9c966a4c9b78))
- override events on disabled sockets to prevent reconnection ([bea9010](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bea9010e2cfa2d1d128262066a43f33c0aa5e79a))
- rm `.only` modifier ([dc8eef9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/dc8eef912a58965e256a7366be342ccd4fdf83a9))
- rm duplicate deleteClients ([fcfb1a9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/fcfb1a9cf64a482e4482275938931eeaf0066444))
- Skip Push Tests in v2 ([#1492](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1492)) ([f65d866](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f65d866f6534618d62b13c87f8f3cc670627e909))
- speed up validation tests by initializing clients once per describe ([1c9c447](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1c9c447b19ebc8f6659040c58275795fd690e8ca))
- **test:** avoids race condition when binding `session_proposal` listener ([#1404](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1404)) ([a4ddb05](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a4ddb051e2d9cab2f9c78773dc2de9edcc3ad37e))
- **test:** ensure generated persistent DBs are always unique ([#1462](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1462)) ([b9074a1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b9074a1bbac6f28a0da31db36149a0625bc03a3c))
- **test:** fixes separate clients using same persistent DB ([#1397](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1397)) ([f651d47](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f651d47dbc339bd90f54076432f83b572af67cfc))
- **test:** push test fails occasionally ([#1468](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1468)) ([c1ab137](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c1ab137bf00f1bd56f21501a807ddb0178a8d0d6))

### Features

- adds a listener if connection is reopen to disconnect automatically ([0007bcb](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0007bcba1d14f5b83002667eae01a91a1067bc4f))
- adds a throttle between disconnect tests ([549848e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/549848edf2576e054f68926827ef6e105e76669c))
- adds disconnect socket to sign-client tests ([0c4d051](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0c4d051b60ac60eda65ed18321a95e1d9a8eab7d))
- **canary:** cover session_ping ([#1446](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1446)) ([c0a1ff0](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c0a1ff010ff8c3524037e8145a0e613a09bb4430))
- **canary:** depict region ([#1423](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1423)) ([f439310](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f43931066cfbd6a2f2fccb38a399a332f272c448))
- **canary:** granular latency metrics ([#1444](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1444)) ([d5f3715](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d5f37159ef398068294aa76610242c2318893f00))
- **canary:** log client id ([#1400](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1400)) ([a8fa2b7](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a8fa2b7dd135282c62e7c1c17fa74be6b640527f))
- **canary:** timeout connect ([#1453](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1453)) ([f7a8a1c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f7a8a1cb196f6f26ffafdc8a34534c478594253a))
- connect in batches ([#1388](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1388)) ([c4d4fb3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c4d4fb34032d24f0031539566d49a5fffa58c672))
- disables heartbeat when disconnecting sockets ([bc56704](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bc567046087daf298235dfa0d88baf7a2e99e99d))
- disconnect sign client ([6c6cc7e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6c6cc7e8f23965f732cc6948546d1a12466fce04))
- distinguish canary target in metrics ([#1378](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1378)) ([056e815](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/056e815253ecf74beed8ca91db78ec9f232d0045))
- don't export metrics in dev ([#1426](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1426)) ([1e1ca2d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1e1ca2daeb1b0e855a0ee7ca35be06dcf255e1a4))
- dont await relayer to publish message before returning requestID ([79bcdd1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/79bcdd10037c6ec23212642bc857f869e41dc0bc))
- extend more time to connect ([#1391](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1391)) ([4934462](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/49344623abc3bf3bda46eaa2f1c7b0aaba206f1d))
- increate tests timeout ([e055ced](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e055cede8a4032adaa1832f0057ae9c319c319d1))
- introduce qr code scan time ([#1442](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1442)) ([e1ac843](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e1ac843c92cd9df7a7f1f87eb3f2dd3dc744fa5b))
- **loadtest:** publish to cloudwatch ([#1392](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1392)) ([e589ec4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e589ec4231d2619e94bdc7c48fb2f50686af47d6))
- log client id when pairing fails ([#1456](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1456)) ([2c69eb0](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2c69eb0b389791bd1ea0b3c209455c666590231e))
- log client ids when restart tests fail ([#1458](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1458)) ([2bf9e62](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2bf9e62436c4eecbc5b76c34b0ee675953345204))
- log client ids when tests fail ([#1455](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1455)) ([f2fa66c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f2fa66c361a7bad5a32a856fe408c0fd283a07be))
- more precise canary metrics ([#1401](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1401)) ([0b8f171](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0b8f171bdb66857bcc7533cf081b3d4385e4c167))
- Pairing API ([#1536](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1536)) ([bc6f663](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bc6f6632b7c665d868bcd59669281c1ead2dd31a))
- print client ids ([#1417](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1417)) ([2b9d3e5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2b9d3e5599b9f610e77a7a7a6e5bf081d0b6fb54))
- reenables ttl ([e9505f4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e9505f4ff8deef54d835f8570e4f0e1cc092af30))
- **test:** cover pairing/ping in xregion test ([#1504](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1504)) ([4563ebd](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4563ebd4c15b0a36d0ed773fabfacd12aebab885))
- **test:** extend some timeouts ([#1448](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1448)) ([a1fe9b4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a1fe9b4b8c9656707967869872ba4465e0f6beed))
- **test:** log client ids ([#1464](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1464)) ([4562ae5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/4562ae5dbf8ccf9eb271845eeb064a011140a93e))
- **tests:** Add xregion testing for new relayerURLs ([0a2f5b2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0a2f5b2b47f816d86851db74920b00ff1faa8cee))
- timeout pair() ([#1457](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1457)) ([1c729c3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1c729c3b23aafe5b84baea9b30b60450923c1805))

### Reverts

- Revert "refactor: reuse clients in validation tests" ([6afc63c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6afc63c1257ea7a9b0b1f4a5bf480a482e927844))

# 2.0.0-rc.2 (2022-08-15)

### Bug Fixes

- add custom vitest config for sign-client so we can run longer loadtests ([8cd7ede](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8cd7edea8aa7034bd1db870eddd1aeda2d8728ae))
- **sign-client/test:** calculates correct test duration in canary test ([0f7d9d7](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0f7d9d79ef2f0cc60c2970de6d6e581023761688))
- **sign-client/test:** waits for the canary log to upload before exiting the process ([697897c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/697897c385ad8a7ee0e1af9c12948ea2657688f6))

### Features

- covers push functionality ([#1332](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1332)) ([7ec69cb](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7ec69cb8287abd758d1a591369dfa7ce76779e97))

# 2.0.0-rc.0 (2022-07-18)

### Bug Fixes

- concurrency test time breaking other tests ([#1227](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1227)) ([c52383b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c52383b693b04359d6041e44acb02fc42ec7ab20))
- implements heartbeat to log current progress of the loadbalance test & ability to proceed with client creation if the current pairing is unresposive for a while ([53a75d5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/53a75d5d81855618c9ce7975a8a11b7006986b80))
- load test parameters not parsed correctly ([#1247](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1247)) ([2fbe81f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2fbe81f51b105ffe392ee15d5b9968fdb6a3f02a))
- loadtest fails to compile ([#1237](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1237)) ([de9653a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/de9653a77f79b491a61e0140838ffaeffcbeb346))
- rm only ([42079ad](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/42079ada2e3e683fc129571c512c7f80397736ae))
- sign-client build is broken ([#1248](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1248)) ([268f5e6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/268f5e6981a6868bb20cb1c57593531e60eb1e63))
- tests not running ([#1225](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1225)) ([cd7bc97](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/cd7bc97f2ae7c53665d4049470e1012423d209a5))

### Features

- adds loadtest script ([8e39eed](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8e39eed27eb4daec34a24f29618e41faaeda4aef))
- refactors load test for improved concurrency and messages per client support ([aa9682d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/aa9682da3520b7e0cd74aecdb808fabde33444f8))
- **sign-client:** adds concurrency test ([c444135](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c44413549af5d209a22949e70991588157862d8d))

# 2.0.0-beta.102 (2022-07-07)

### Bug Fixes

- tests have dependencies outside of the package ([#1217](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1217)) ([fad2ba2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/fad2ba23f69124ad493cfa6fab4278fd007c9bb2))

### Features

- adds canary test ([#1220](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1220)) ([ca18037](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ca18037da360bb67b61077ee96aab30dbe1d3c59))
- builds sign client into docker ([#1216](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1216)) ([3427445](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/3427445bf613d1aae155295a33e087bedfffcc1b))
- **sign-client/test:** adds validation test for some of the events ([c4bca9c](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c4bca9cf686ebcaad56eea03220e3bfcdc421bdd))

# 2.0.0-beta.100 (2022-05-30)
