// ============================================
// Admin-Toolbox - Tool Index
// Author: Mikael Todd
// Curated practical and homelab/admin tools
// ============================================

// Encoding / Decoding
import { tool as base64FileConverter } from './base64-file-converter';
import { tool as base64StringConverter } from './base64-string-converter';
import { tool as textToBinary } from './text-to-binary';
import { tool as stringObfuscator } from './string-obfuscator';
import { tool as safelinkDecoder } from './safelink-decoder';

// Format & Conversion
import { tool as jsonToXml } from './json-to-xml';
import { tool as xmlToJson } from './xml-to-json';
import { tool as yamlToJson } from './yaml-to-json-converter';
import { tool as jsonToCsv } from './json-to-csv';
import { tool as markdownToHtml } from './markdown-to-html';
import { tool as textDiff } from './text-diff';
import { tool as jsonDiff } from './json-diff';
import { tool as listConverter } from './list-converter';
import { tool as emailNormalizer } from './email-normalizer';

// Generators & Validators
import { tool as basicAuthGenerator } from './basic-auth-generator';
import { tool as passwordStrengthAnalyser } from './password-strength-analyser';
import { tool as macAddressGenerator } from './mac-address-generator';
import { tool as ulidGenerator } from './ulid-generator';
import { tool as ibanValidatorAndParser } from './iban-validator-and-parser';

// Network & Web
import { tool as httpStatusCodes } from './http-status-codes';
import { tool as ipv4RangeExpander } from './ipv4-range-expander';
import { tool as phoneParserAndFormatter } from './phone-parser-and-formatter';

// Security & Utilities
import { tool as pdfSignatureChecker } from './pdf-signature-checker';
import { tool as regexTester } from './regex-tester';

// Homelab & Admin Tools (new)
import { tool as pingTester } from './ping-tester';
import { tool as portChecker } from './port-checker';
import { tool as dnsLookup } from './dns-lookup';
import { tool as whoisLookup } from './whois-lookup';
import { tool as sslChecker } from './ssl-checker';
import { tool as uptimeMonitor } from './uptime-monitor';
import { tool as subnetCalculator } from './subnet-calculator';
import { tool as logAnalyzer } from './log-analyzer';
import { tool as networkSpeedTest } from './network-speed-test';
import { tool as dockerStatus } from './docker-status';

// Export all tools
export const tools = [
  // Encoding / Decoding
  base64FileConverter,
  base64StringConverter,
  textToBinary,
  stringObfuscator,
  safelinkDecoder,

  // Format & Conversion
  jsonToXml,
  xmlToJson,
  yamlToJson,
  jsonToCsv,
  markdownToHtml,
  textDiff,
  jsonDiff,
  listConverter,
  emailNormalizer,

  // Generators & Validators
  basicAuthGenerator,
  passwordStrengthAnalyser,
  macAddressGenerator,
  ulidGenerator,
  ibanValidatorAndParser,

  // Network & Web
  httpStatusCodes,
  ipv4RangeExpander,
  phoneParserAndFormatter,

  // Security & Utilities
  pdfSignatureChecker,
  regexTester,

  // Homelab & Admin Tools
  pingTester,
  portChecker,
  dnsLookup,
  whoisLookup,
  sslChecker,
  uptimeMonitor,
  subnetCalculator,
  logAnalyzer,
  networkSpeedTest,
  dockerStatus
];