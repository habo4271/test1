/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import components from 'perf-benchmarks-components/dist/dom/benchmark/light/styledComponents.js';
import { styledComponentBenchmark } from '../../../utils/styledComponentBenchmark';

// Create 1k components with different CSS in each component
// These are light DOM components running in native mode
styledComponentBenchmark(`benchmark-styled-component/create/1k/different`, components);
