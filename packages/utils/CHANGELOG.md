# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.3](https://github.com/bongdungyeuem27/cosmoskitconnect/compare/@cosmoskitconnect/utils@0.2.0...@cosmoskitconnect/utils@0.1.3) (2024-12-25)

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

- **deps:** update dependency elliptic to v6.6.1 ([#5503](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/5503)) ([b8ab8e6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b8ab8e60bdba37a29921822ce89283e12ca76b62))
- send appId to socket url ([9e5dc42](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9e5dc421e6db8456118793eaf2438c5476039aed))

### Features

- cache result of expiring promise ([f49c793](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f49c793fcf1ec871df537d10dc4c3acad301fa47))

## 2.17.2 (2024-11-05)

### Bug Fixes

- **deps:** update dependency elliptic to v6.6.0 [security] ([bd2fde4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bd2fde4e06a1a3c0dec00969855f005b9449ce9c))
- uses caip2 chain and adds validation ([228db60](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/228db6046fe0e120362d39f7757020f10e99bb88))

### Features

- tests ([2efe70a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2efe70a2dcfd4e7c1770bbebec92940681128c59))

# 2.17.0 (2024-10-01)

### Bug Fixes

- deeplink target for tma ([6d58bab](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6d58bab5797dcace2c375b28e9f5d8d6abd454e2))
- enables pairing via base64 encoded uri ([d1f70f6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d1f70f607026bafec315c8d50717f38e17c5fef0))
- isTelegram check ([52e0bfd](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/52e0bfd1946fedd61a7716f877a57d0b439b6cd5))
- returns localStorage contains deeplink ([c728abf](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c728abfef8b42c729b1927d7d1c8dbd66607a8e4))
- session request deeplink payload encoding when targeting t.me links ([2297002](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/22970023fc14348559d2a6143f9fda8100f2f43b))

### Features

- tma deeplink compatibility ([f38c00b](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f38c00b90d96268b4e80432e5307436d68354194))

# 2.16.0 (2024-09-06)

## 2.15.3 (2024-09-05)

### Bug Fixes

- enforces origin url to be verified to produce verify context ([b15dbb6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b15dbb65214404dd4483215a5b2cc341165223df))

## 2.15.2 (2024-08-30)

### Bug Fixes

- adds missing relay-auth package ([34b84ec](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/34b84ec35656ce2961a83013ff8dfcd55de0ad33))

## 2.15.1 (2024-08-20)

# 2.15.0 (2024-08-15)

### Bug Fixes

- avoid deeplinking if document isn't in focus ([be88bb9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/be88bb9d2f7d9cf74bc6957c35c0fb873cff8cfe))
- subtle crypto in node ([faeed6d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/faeed6da1af48a4d5a694e277acb880c3d4655e5))

### Features

- adds test ([5210e5a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5210e5af1a48af2d8e2f54cb7fc6c734741d4b77))
- adds unhappy path tests ([29f8df8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/29f8df8080454dfb921a4a55cd1395448528d44e))
- implements `ecdsa` signature validation without relying on `node:crypto` or `crypto.subtle` ([fb3dceb](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/fb3dceb5b0b451d1804146b43d9b76a792d6f5f4))
- verify v2 ([d1966d4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d1966d413e749a98633658e86093942dc7556a22))

# 2.14.0 (2024-07-17)

### Bug Fixes

- crypto in node 18 ([8c2b7e9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8c2b7e9612576a81ed99cde91a408f300bc00b8d))

### Features

- events sdk ([2ba4208](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2ba4208c9120e2be7014cdeb796a96214d9f11bb))

## 2.12.2 (2024-04-09)

# 2.12.0 (2024-04-03)

### Bug Fixes

- adds `http://` support for deeplinks ([ef9db08](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ef9db0843102cd52967928925a62b9665ca69fec))

## 2.11.3 (2024-03-18)

### Bug Fixes

- adds resources to siwe message only if resources array exist ([a56ad13](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a56ad135ec2e9dd2d646655005e6344c93080663))
- doesn't append new line after `Resources:` if array is empty ([61a9117](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/61a9117cc261331c7c7c9cc7472787ea70a51f30))
- removes extra empty line ([a2d1519](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a2d1519d1ce996fb37da8c4765bed8edf2423662))
- uses only required props by spec ([ddea467](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ddea467a4e2d03b7d914519387ee613d14ae0771))

### Features

- adds caip1271 signature validation ([1c0d750](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1c0d750e7f6b11c5097ebe82da95a800e165eec7))
- adds param to createRecap util ([62d35f1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/62d35f1ba473386cadb3f1ae1e6f46e9f4a74ac0))
- adds personal sign to siwe ([8b8bd34](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8b8bd345b997dd9474ddd44c98e7b7cc90f0cff2))
- formatMessage types ([0d9a9c2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0d9a9c202c75f62cd2cec84671fd7f28a64d47a4))
- implements authenticate in providers ([912829f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/912829f1321dbe96c44f8f27903eca814cf85248))
- implements single recap ([89f2b57](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/89f2b578f8d449d753606311a04761d60109011c))
- reject when auth signature validation fails ([6a3d303](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/6a3d303e68a2245c2513da1db604112d197bc2f4))

## 2.11.2 (2024-02-21)

### Bug Fixes

- implements synced expiries for proposals and session request ([385e27a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/385e27a24b10c7bdd2a16fec4a069492672c2fed))

### Features

- adds siwe test ([68977c0](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/68977c04a45fd8fcb2d5d8624d7f0b76c12eb47c))
- sorts recap methods alphabetically, increases default expiry to 15m & general cleanup ([1461fea](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1461fea76406e2eb69d1c2df402d328514ddb0a5))
- updates wallet authentication to latest spec ([09985df](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/09985df4f883ff040795c3da9ea701d8e1f841de))

# 2.11.0 (2023-12-21)

### Bug Fixes

- added extra condition in isBrowser function ([665c670](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/665c67067613ece11450c938ccbab1fc930fe91b))

### Features

- WIP: authenticated sessions draft ([bfbc9d5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bfbc9d59bdf1d497cb004e2317470eacb079d181))
- wip: dynamic switcher ([c1535f9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c1535f94771bd7f6b8209a7205f366fe4b2d6169))
- WIP: tests ([66f832d](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/66f832dece8725e491c9dc4c54ea06f68d31c570))

## 2.10.6 (2023-11-29)

### Features

- added native module to get bundle id and check installed apps ([f8fd320](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/f8fd320d8af5c1a3064ed42f5adb200a6fac1f44))
- adds fallback to localStorage if deep link is missing from storage ([25d6ea8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/25d6ea8044ec607360dd3d17ebebf280898641be))
- expose error types ([d85d5a6](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d85d5a6f40dbf5b164175e068ac1e80ea34f468d))

## 2.10.4 (2023-10-24)

## 2.10.3 (2023-10-23)

### Bug Fixes

- srtips native schemas from URI ([e413649](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e413649754f98f71dee0d9a6b2d87435470f6d5b))

## 2.10.2 (2023-10-07)

### Bug Fixes

- adds additional `!RN` check before subscribing to browser network events ([2bcbab5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/2bcbab5cbb696b627ed450460d83702448fd6e35))

## 2.10.1 (2023-09-12)

### Bug Fixes

- sets `rejectZero` flag to true to avoid all zero key derivation ([a8bcabb](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a8bcabb090ce57f2b4c535e7a1283ffa06496ad1))

## 2.9.2 (2023-08-01)

### Bug Fixes

- fixes a bug with matching optional chains and accounts ([14dd54f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/14dd54f27df312e2ac1cc04351e0665bc482df85))

## 2.9.1 (2023-07-20)

### Bug Fixes

- fixes issue where when both required & optional namespaces are empty, the approved were empty as well ([42894a2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/42894a2a4ef059933f0489633a0f0bdced2d344c))

### Features

- implements subscribeToNetworkChange ([09adb88](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/09adb888035e0aa0c3bb1e7a0dc41a426a01a695))

# 2.9.0 (2023-07-06)

### Bug Fixes

- **utils:** ensures RN-only `Platform` polyfill has exhaustive guard ([#3008](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/3008)) ([9fea77a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9fea77a5a78a835e041135c3af24fdaecb431b5f))

## 2.8.5 (2023-06-28)

### Bug Fixes

- namespace chains validation ([56bc93a](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/56bc93a7e07f94f5cb79b8b7d90f7c45b862ab5f))

## 2.8.4 (2023-06-27)

## 2.8.2 (2023-06-23)

### Bug Fixes

- **react-native:** detect RN OS via `global.Platform` binding ([#2724](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2724)) ([b9aae24](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/b9aae24617a4d423c4ea3a9225176c3ffe8d13de))

## 2.8.1 (2023-06-15)

# 2.8.0 (2023-06-08)

## 2.7.8 (2023-06-05)

## 2.7.6 (2023-05-22)

### Bug Fixes

- adds pars pairing topic util that strips prefixed `//` ([63d72f9](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/63d72f99e81314d5f0e5ffaa5fec25181c9c1691))

### Features

- adds tests ([a77a5d4](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/a77a5d41ce13b6202459e6748a1828b76fe2c2c6))

## 2.7.5 (2023-05-17)

### Bug Fixes

- **deps:** update dependency query-string to v7.1.3 ([#2215](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2215)) ([7c7a67e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7c7a67ec3d7d2b2c113a5928197361d9efdc3c8a))
- resolves a bug where chains were incorrectly matched to an account e.g. chain `1` was matched with `11` ([e371eb3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e371eb3cf66455f96452835d82b3c6e59be8bffd))

### Features

- adds tests ([d535bd3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d535bd3e54784456afd5e91ad006604d094ea8c4))

# 2.6.0 (2023-04-03)

### Bug Fixes

- adjusts uri test ([956e5f8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/956e5f87fafc51046ba8bfb1fa77fd9a42c80843))
- catch request error ([7fec309](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7fec3095252915632417ef592cf7d6acf97ef13d))
- **deps:** adds missing explicit `events` dep ([d2663e1](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/d2663e1292ae7c09aa8ab67404c54c1bfa82d9dd)), closes [#1659](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1659)
- encodeISS crash - Buffer is not of Uint8Array type ([6314437](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/63144373e252b503e69110316e83fa58eed85d26))
- rejects pending proposal with an error instead of `undefined` ([41c35d8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/41c35d89f9dfa67e4b59480ccbe545d656a2a686))
- removes chain from inline declarations ([c3b3bbd](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c3b3bbdbc704ba48ba04426bd732f1645c5e7d3f))
- resolves issue where namespaces were not validated correctly ([e9ee18e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/e9ee18e5a26287334effad17a3c917f551ddabfa))
- stalled connection in CI ([#1758](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1758)) ([0cdf2a2](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0cdf2a2bd2008dd7feab86ab4bde6b975f536235))
- **utils:** ensures matching units in `isExpired`, adds tests for expiry calcs ([eb23a2e](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/eb23a2e7f8b8287cdaff6cba0b8c578783d78e0d))
- validate optional namespaces ([ad09b75](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/ad09b75de3299f59ea7449490a3b3d267bc32a03))
- validates inline chains with provided accounts ([1e7f022](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/1e7f0224ef07aae4e384d1bcc6625a5b3d1ecdc4))
- validates topic & symKey in pairing URI ([9e479b8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9e479b8af729828169603e1bd1627a32374b0213))

### Features

- adds an optional expiry param to `createDelayedPromise` ([7716998](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7716998cbe03d5dc69ac5dff27bda419a7691350))
- adds optional request expiry ([c1d77d5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/c1d77d5f9ebc186f74650959e9019b7d584ff118))
- adds test cases ([5a310f8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5a310f8a81a38436a3a7df15a7906b3d6fb8b5fb))
- adds test cases for `buildApprovedNamespaces` ([9bcc877](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/9bcc8776ed1be84e1285bddd20b6934a4db97185))
- adds tests for namespace validation ([531205f](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/531205f2a704a511db35154067da552cad592eee))
- **core:** emit publishedAt as part of relayer MessageEvent ([#2036](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2036)) ([0662cac](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/0662cac6bdf729a0b8500a76d409e3d33b4f1a5e))
- empty required namespaces ([8e02fe8](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8e02fe87b802689dcc6611411ed88fe515ab954a))
- implements `buildApprovedNamespaces` util ([fd37aa3](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/fd37aa31040e84f15059435bf9507581fed835b5))
- implements `irn_batchSubscribe` ([95b4fbc](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/95b4fbcb5fd26219b3dbbbcffb436094732d1806))
- implements inline indexed single chains in namespaces such as `eip155:1` ([2461163](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/246116371963e49533499b8b23bb809f5b0d3332))
- implements optionalNamespaces as per caip-25 requirements ([5466fc5](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/5466fc5492193172dd1f2ab01333002530828ae0))
- implements rejection tests cases ([8e923ad](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/8e923ad2fd0a266164c9e0cfaaad90b36b138501))
- **relayer:** surface abnormal websocket close reasons ([#2096](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/2096)) ([7ee2091](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/7ee2091c3c28ac2a035dba52b6ad5f968e32276a))

## 2.1.3 (2022-11-14)

# 2.0.0 (2022-10-24)

### Features

- Pairing API ([#1536](https://github.com/bongdungyeuem27/cosmoskitconnect/issues/1536)) ([bc6f663](https://github.com/bongdungyeuem27/cosmoskitconnect/commit/bc6f6632b7c665d868bcd59669281c1ead2dd31a))

# 2.0.0-rc.2 (2022-08-15)

# 2.0.0-beta.100 (2022-05-30)

# 2.0.0-beta.26 (2022-03-29)

# 2.0.0-beta.24 (2022-03-28)

# 2.0.0-beta.23 (2022-02-08)

# 2.0.0-beta.22 (2022-01-07)

# 2.0.0-beta.16 (2021-07-29)

# 2.0.0-beta.14 (2021-07-15)

# 2.0.0-beta.12 (2021-06-16)

# 2.0.0-beta.4 (2021-05-20)

# 2.0.0-beta.2 (2021-05-19)

# 2.0.0-beta.1 (2021-05-07)

# 2.0.0-beta.0 (2021-04-28)
