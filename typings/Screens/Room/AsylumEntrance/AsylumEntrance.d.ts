declare function AsylumEntranceCanWander(): boolean;
declare function AsylumEntranceCanTransferToRoom(): boolean;
declare function AsylumEntranceCanKiss(): any;
declare function AsylumEntranceCanGetNurseUniform(): boolean;
declare function AsylumEntranceLoad(): void;
declare function AsylumEntranceRun(): void;
declare function AsylumEntranceClick(): void;
declare function AsylumEntranceStartChat(): void;
declare function AsylumEntranceWearNurseClothes(C: any): void;
declare function AsylumEntranceWearPatientClothes(C: any): void;
declare function AsylumEntranceIsWearingPatientClothes(): boolean;
declare function AsylumEntranceIsWearingNurseClothes(): boolean;
declare function AsylumEntranceCommitPatient(Duration: any, ReputationChange: any): void;
declare function AsylumEntranceStartNurse(): void;
declare function AsylumEntranceFightNurse(): void;
declare function AsylumEntranceFightNurseEnd(): void;
declare function AsylumEntrancePlayerJacket(Pose: any): void;
declare function AsylumEntrancePlayerNurseClothes(RepChange: any): void;
declare function AsylumEntranceNurseBecomePatient(): void;
declare function AsylumEntranceNurseStrap(RepChange: any): void;
declare function AsylumEntranceRecommit(): void;
declare function AsylumEntranceNurseCatchEscapedPlayer(): void;
declare function AsylumEntranceKidnapNurseFight(): void;
declare function AsylumEntranceKidnapNurseFightOutro(Surrender: any): void;
declare function AsylumEntranceKidnapNurseBribe(BribeAmount: any, BribeOdds: any): void;
declare function AsylumEntranceKidnapNurseTransferToRoom(): void;
declare function AsylumEntranceKidnapNurseExit(): void;
declare function AsylumEntranceGoToAsylum(): void;
declare function AsylumEntranceBackAsPatient(): void;
declare function AsylumEntranceEscapedPatientMeet(): void;
declare function AsylumEntranceEscapedPatientFight(): void;
declare function AsylumEntranceEscapedPatientFightOutro(Surrender: any): void;
declare function AsylumEntranceEscapedPatientBribe(): void;
declare function AsylumEntranceEscapedPatientTransferToRoom(): void;
declare function AsylumEntranceEscapedPatientTransferToAsylum(): void;
declare function AsylumEntranceEscapedPatientLeave(): void;
declare function AsylumEntranceGiveNurseUniform(): void;
declare var AsylumEntranceBackground: string;
declare var AsylumEntranceNurse: any;
declare var AsylumEntranceKidnapNurse: any;
declare var AsylumEntranceEscapedPatient: any;
declare var AsylumEntranceEscapedPatientWillBribe: boolean;
declare var AsylumEntranceEscapedPatientWillJoin: boolean;