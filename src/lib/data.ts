const IMAGE_URL_PREFIX = 'https://ik.imagekit.io/29ddu02vk/trex';

export const exercises = {
	warmupAndCore: {
		name: 'WARMUP / CORE',
		media: `${IMAGE_URL_PREFIX}/warmup.png`
	},
	coolDown: {
		name: 'COOL DOWN'
		// media: `${IMAGE_URL_PREFIX}/cool-down.gif`
	},
	cleanComplex: {
		name: 'CLEAN COMPLEX'
		// media: `${IMAGE_URL_PREFIX}/clean-complex.gif`
	},
	hangClean: {
		name: 'HANG CLEAN',
		media: `${IMAGE_URL_PREFIX}/hang-squat-clean.gif`
	},
	backSquat: {
		name: 'BACK SQUAT',
		media: `${IMAGE_URL_PREFIX}/back-squat.gif`
	},
	pullUps: {
		name: 'PULL UPS',
		media: `${IMAGE_URL_PREFIX}/pull-ups.gif`
	},
	oneLegRdl: {
		name: '1 LEG RDL',
		media: `${IMAGE_URL_PREFIX}/2-db-1-leg-rdl.gif`
	},
	shoulderComplex: {
		name: 'SHOULDER COMPLEX',
		media: `${IMAGE_URL_PREFIX}/shoulder-complex-front.gif`
	},
	shoulderAndCore: {
		name: 'SHOULDER / CORE'
		// media: `${IMAGE_URL_PREFIX}/shoulder-and-core.gif`
	},
	deadlift: {
		name: 'DEADLIFT',
		media: `${IMAGE_URL_PREFIX}/deadlift-front.gif`
	},
	pushPress: {
		name: 'PUSH PRESS',
		media: `${IMAGE_URL_PREFIX}/push-press.gif`
	},
	lowToHighWoodchop: {
		name: 'LOW TO HIGH WOODCHOP',
		media: `${IMAGE_URL_PREFIX}/kneeling-low-to-high-woodchop.gif`
	},
	bulgarianSquat: {
		name: 'BULGARIAN SQUAT',
		media: `${IMAGE_URL_PREFIX}/db-bulgarian-squat.gif`
	},
	oneArmBenchPress: {
		name: '1 ARM BENCH PRESS',
		media: `${IMAGE_URL_PREFIX}/1-arm-db-bench-press.gif`
	},
	hipsAndCore: {
		name: 'HIPS / CORE'
		// media: `${IMAGE_URL_PREFIX}/hips-and-core.gif`
	},
	powerClean: {
		name: 'POWER CLEAN',
		media: `${IMAGE_URL_PREFIX}/hang-power-clean.gif`
	},
	benchPress: {
		name: 'BENCH PRESS',
		media: `${IMAGE_URL_PREFIX}/bench-press.gif`
	},
	splitSquat: {
		name: 'SPLIT SQUAT',
		media: `${IMAGE_URL_PREFIX}/split-squat.gif`
	},
	splitStanceOneArmPress: {
		name: 'SPLIT STANCE 1 ARM PRESS',
		media: `${IMAGE_URL_PREFIX}/split-stance-1-arm-press.gif`
	},
	oneLegHipThrust: {
		name: '1 LEG HIP THRUST',
		media: `${IMAGE_URL_PREFIX}/1-leg-hip-thrust.gif`
	},
	frontSquat: {
		name: 'FRONT SQUAT',
		media: `${IMAGE_URL_PREFIX}/front-squat.gif`
	},
	bentOverRow: {
		name: 'BENT OVER ROW',
		media: `${IMAGE_URL_PREFIX}/bent-over-row.gif`
	},
	spidermanTwist: {
		name: 'SPIDERMAN TWIST',
		media: `${IMAGE_URL_PREFIX}/spiderman-twist.gif`
	},
	lateralLungeAndStepUp: {
		name: 'LATERAL LUNGE / STEP UP',
		media: `${IMAGE_URL_PREFIX}/lateral-lunge-and-step-up.gif`
	},
	bisAndTris: {
		name: 'BIS / TRIS'
		// media: `${IMAGE_URL_PREFIX}/bis-and-tris.gif`
	},

	cluster: {
		name: 'CLUSTER',
		media: `${IMAGE_URL_PREFIX}/cluster.gif`
	},
	backSquatAndBoxJump: {
		name: 'BACK SQUAT + BOX JUMP',
		media: `${IMAGE_URL_PREFIX}/back-squat-and-box-jump.gif`
	},
	pullUpAndBallSlam: {
		name: 'PULL UP + BALL SLAM',
		media: `${IMAGE_URL_PREFIX}/pull-up-and-ball-slam.gif`
	},
	kneelingOneArmDbPress: {
		name: 'KNELLING 1 ARM DB PRESS',
		media: `${IMAGE_URL_PREFIX}/kneeling-1-arm-db-press.gif`
	},
	frontMedballThrow: {
		name: 'FRONT MEDBALL THROW',
		media: `${IMAGE_URL_PREFIX}/front-medball-throw.gif`
	},
	deadliftAndBoardJump: {
		name: 'DEADLIFT + BOARD JUMP',
		media: `${IMAGE_URL_PREFIX}/deadlift-and-board-jump.gif`
	},
	benchPressAndPlyoPushup: {
		name: 'BENCH PRESS + PLYO PUSHUP',
		media: `${IMAGE_URL_PREFIX}/bench-press-and-plyo-pushup.gif`
	},
	oneArmThruster: {
		name: '1 ARM THRUSTER',
		media: `${IMAGE_URL_PREFIX}/1-arm-thruster.gif`
	},
	lateralMedballThrow: {
		name: 'LAT MEDBALL THROW',
		media: `${IMAGE_URL_PREFIX}/lateral-medball-throw.gif`
	},
	spidermanJump: {
		name: 'SPIDERMAN JUMP',
		media: `${IMAGE_URL_PREFIX}/spiderman-jump.gif`
	},
	hangCleanAndJerk: {
		name: 'HAND CLEAN + JERK',
		media: `${IMAGE_URL_PREFIX}/hang-clean-and-jerk.gif`
	},
	boxSquat: {
		name: 'BOX SQUAT',
		media: `${IMAGE_URL_PREFIX}/box-squat.gif`
	},
	kbSwing: {
		name: 'KB SWING',
		media: `${IMAGE_URL_PREFIX}/kb-swing.gif`
	},
	twoPtOneArmDbRow: {
		name: '2 PT 1 ARM DB ROW',
		media: `${IMAGE_URL_PREFIX}/2-pt-1-arm-db-row.gif`
	},
	lowToHighPulley: {
		name: 'LOW TO HIGH PULLEY',
		media: `${IMAGE_URL_PREFIX}/low-to-high-pulley.gif`
	}
};

type Program = Array<{
	title: string;
	dayOfWeek: number;
	exercises: Array<{
		name: string;
		media?: string;
		kind?: 'warmup' | 'skill' | 'strength' | 'power';
		prescription?: string;
		weightPercent?: number;
		benchmark?: string;
	}>;
}>;

export const fullProgram: Program = [
	{
		title: 'SEGUNDA',
		dayOfWeek: 1,
		exercises: [
			{
				...exercises.cluster,
				kind: 'power',
				prescription: '6 x 1'
			},
			{
				...exercises.backSquatAndBoxJump,
				kind: 'strength',
				prescription: '3 x 3 + 5'
				// weightPercent: 80,
				// benchmark: 'frontSquat1Rm'
			},
			{
				...exercises.pullUpAndBallSlam,
				kind: 'strength',
				prescription: '3 x 3 + 5'
			},
			{
				...exercises.kneelingOneArmDbPress,
				prescription: '3 x 6 + 6'
			},
			{
				...exercises.frontMedballThrow,
				prescription: '3 x 6 + 6'
			}
		]
	},
	{
		title: 'QUARTA',
		dayOfWeek: 3,
		exercises: [
			{
				...exercises.deadliftAndBoardJump,
				kind: 'strength',
				prescription: '3 x 3 + 5'
			},
			{
				...exercises.benchPressAndPlyoPushup,
				kind: 'strength',
				prescription: '3 x 3 + 10'
			},
			{
				...exercises.oneArmThruster,
				prescription: '3 x 6 + 6'
			},
			{
				...exercises.lateralMedballThrow,
				prescription: '3 x 6 + 6'
			},
			{
				...exercises.spidermanJump,
				prescription: '3 x 6 + 6'
			}
		]
	},
	{
		title: 'SEXTA',
		dayOfWeek: 5,
		exercises: [
			{
				...exercises.hangCleanAndJerk,
				kind: 'power',
				prescription: '5 x 2'
			},
			{
				...exercises.boxSquat,
				kind: 'strength',
				prescription: '3 x 5'
			},
			{
				...exercises.kbSwing,
				prescription: '3 x 12'
			},
			{
				...exercises.twoPtOneArmDbRow,
				prescription: '3 x 6 + 6'
			},
			{
				...exercises.lowToHighPulley,
				prescription: '3 x 10 + 10'
			}
		]
	}
];

export const shortProgram: Program = [
	{
		title: 'SEGUNDA',
		dayOfWeek: 1,
		exercises: [
			{
				...exercises.cleanComplex,
				kind: 'skill'
			},
			{
				...exercises.hangClean,
				kind: 'power',
				prescription: '5 x 3'
			},
			{
				...exercises.backSquat,
				kind: 'strength',
				prescription: '2 x 3',
				weightPercent: 80,
				benchmark: 'frontSquat1Rm'
			},
			{
				...exercises.pullUps,
				prescription: '3 x MAX'
			},
			{
				...exercises.oneLegRdl,
				prescription: '3 x 8 + 8'
			},
			{
				...exercises.shoulderComplex,
				prescription: '3 x 8 + 8'
			}
		]
	},
	{
		title: 'QUARTA',
		dayOfWeek: 3,
		exercises: [
			{
				...exercises.shoulderAndCore,
				kind: 'skill'
			},
			{
				...exercises.deadlift,
				kind: 'strength',
				prescription: '2 x 3',
				weightPercent: 80,
				benchmark: 'deadlift1Rm'
			},
			{
				...exercises.pushPress,
				kind: 'strength',
				prescription: '2 x 3',
				weightPercent: 80,
				benchmark: 'shoulderPress1Rm'
			},
			{
				...exercises.lowToHighWoodchop,
				prescription: '3 x 8 + 8'
			},
			{
				...exercises.bulgarianSquat,
				prescription: '3 x 8 + 8'
			},
			{
				...exercises.oneArmBenchPress,
				prescription: '3 x 8 + 8'
			}
		]
	},
	{
		title: 'SEXTA',
		dayOfWeek: 5,
		exercises: [
			{
				...exercises.hipsAndCore,
				kind: 'skill'
			},
			{
				...exercises.powerClean,
				kind: 'power',
				prescription: '5 x 3'
			},
			{
				...exercises.benchPress,
				kind: 'strength',
				prescription: '2 x 3',
				weightPercent: 80,
				benchmark: 'benchPress1Rm'
			},
			{
				...exercises.splitSquat,
				prescription: '3 x 8 + 8'
			},
			{
				...exercises.splitStanceOneArmPress,
				prescription: '3 x 8 + 8'
			},
			{
				...exercises.oneLegHipThrust,
				prescription: '3 x 8 + 8'
			}
		]
	}
];
