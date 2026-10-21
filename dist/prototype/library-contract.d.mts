/** Contract v1. Definitions do not release content or enable model calls. */
export type FactState = 'yes' | 'no' | 'unknown';
export type RequestMode = 'inspect' | 'discover' | 'compare' | 'substitute';
export interface LibraryRequest {
  version: 1;
  mode: RequestMode;
  query: string;
  baselineId: string | null;
  candidateId: string | null;
  intent: {purposeIds: string[]; movementIds: string[]; muscleIds: string[]};
  constraints: {
    /** null means no explicit inventory boundary; [] permits no physical items. */
    allowedEquipmentTypes: string[] | null;
    positionIds: string[];
    mustPreserve: string[];
  };
  contextRevision: number;
}
export interface VisitItem {
  id: string;
  type: string;
  /** Physical units represented by this item record; null means unknown. */
  count: number | null;
  /** Reported descriptive weight, never a derived prescription. */
  reportedWeightKg: number | null;
  presence: 'present' | 'absent' | 'unknown';
  access: 'available' | 'busy' | 'unknown';
  capabilities: Record<string, FactState>;
}
export interface VisitContext {
  version: 1;
  revision: number;
  items: VisitItem[];
  spaceFacts: Record<string, FactState>;
  handlingChecks: Array<{exerciseId: string; itemIds: string[]; checkId: string; value: FactState}>;
}
export type Requirement =
  | {kind: 'all'; clauses: Requirement[]}
  | {kind: 'any'; branches: Array<{id: string; instructionRef: string; requires: Requirement}>}
  | {kind: 'item'; role: string; type: string; count: number; capabilities: string[]}
  | {kind: 'context'; fact: string}
  | {kind: 'handling'; exerciseId: string; itemRole: string; checkId: string}
  | {kind: 'legacy'; namespace: 'equipment' | 'capability'; key: string};

/** Authoring contracts for later source and rule work. Not runtime-approved data. */
export interface SourceReference {
  id: string;
  title: string;
  uri: string;
  locator: string;
  accessedAt: string | null;
  sourceRevision: string | null;
  contentSha256: string | null;
  supportedClaimIds: string[];
  reuse: 'original-summary' | 'licensed-excerpt' | 'permission-required' | 'unresolved';
}
export interface ReviewProvenance {
  sourceCheck: {status: 'pending' | 'checked'; reviewer: string | null; reference: string | null};
  coachingReview: {kind: 'none' | 'principle' | 'batch' | 'individual'; reference: string | null};
  /** Separate assessment of exact model wording, never inherited from coachingReview. */
  outputReview: {status: 'not-applicable' | 'unreviewed' | 'accepted' | 'withheld'; reference: string | null};
}
export interface EvidencePassage {
  id: string;
  revision: string;
  text: string;
  scope: {
    exerciseIds: string[];
    directedPair: {baselineId: string; candidateId: string} | null;
    ruleIds: string[];
    conditions: string[];
  };
  claimIds: string[];
  sourceRefs: string[];
  review: ReviewProvenance;
}
export interface FamilyRuleDefinition {
  id: string;
  revision: string;
  status: 'draft' | 'released';
  taskIds: string[];
  requiredProfileFields: string[];
  conditions: string[];
  exceptions: string[];
  /** Names a reviewed code implementation; never executable text supplied by a model. */
  evaluatorId: string;
  evidenceRefs: string[];
  allowedClaimIds: string[];
  prohibitedConclusions: string[];
  review: ReviewProvenance;
}
export interface CandidateDecision {
  exerciseId: string;
  baselineId: string | null;
  eligibility: 'eligible' | 'conditional' | 'excluded' | 'unsupported';
  relevance: 'direct' | 'partial' | 'related' | null;
  similarity: 'close' | 'some' | 'broader' | 'poor' | null;
  setup: {
    status: 'confirmed' | 'unknown' | 'conflict' | 'unsupported';
    unresolvedFacts: string[];
    conflictingFacts: string[];
    branchIds: string[];
    instructionRefs: string[];
    itemBindings: Array<{role: string; itemId: string; count: number | null}>;
  };
  basis: {kind: 'profile' | 'maintained-pair' | 'family-rule' | 'none'; ids: string[]};
  essentialClaimIds: string[];
  reasonIds: string[];
  contextRevision: number;
}
export interface ExplanationDependencies {
  contentRelease: string;
  orderedExerciseIds: string[];
  intentAndConstraints: Pick<LibraryRequest, 'intent' | 'constraints'>;
  question: string;
  /** Include the reported facts, not just a visit-local revision counter. */
  visitContext: VisitContext;
  /** Digest of selected deterministic decisions, including setup branches/item bindings. */
  decisionFingerprint: string;
  profileRevisions: Record<string, string>;
  comparisonRevisions: Record<string, string>;
  ruleRevisions: Record<string, string>;
  evidenceRevisions: Record<string, string>;
  model: string;
  promptRevision: string;
  schemaRevision: string;
  validatorRevision: string;
}
export interface GeneratedExplanation {
  status: 'answered' | 'insufficient' | 'unavailable' | 'withheld';
  dependencies: ExplanationDependencies;
  claims: Array<{text: string; supportedClaimIds: string[]; evidenceIds: string[]}>;
  review: ReviewProvenance;
}
export const CONTRACT_VERSION: 1;
export const REQUEST_MODES: readonly RequestMode[];
export const FACT_STATES: readonly FactState[];
export function freezeData<T>(value: T): Readonly<T>;
export function validateLibraryRequest(value: unknown): Readonly<LibraryRequest>;
export function validateVisitContext(value: unknown): Readonly<VisitContext>;
export function validateRequirement(value: unknown): Readonly<Requirement>;
