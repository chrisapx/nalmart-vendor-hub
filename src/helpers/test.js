const opportunityHistorySchema = Joi.object({
    projectId: Joi.number().required(),
    role: Joi.string().required(),
    attendedYeT: Joi.any().valid(true, false, 1, 0, '1', '0', '').optional().default(false).custom((value: any) => { return value == '' ? false : value }, 'customTransform'),
    YeTdate: Joi.when('attendedYeT', {
        is: true,
        then: Joi.date().required(),
        otherwise: Joi.date().optional().empty('')
    }),
    attendedOpsToT: Joi.any().valid(true, false, 1, 0, '1', '0', '').optional().default(false).custom((value: any) => { return value == '' ? false : value }, 'customTransform'),
    opsToTdate: Joi.when('attendedOpsToT', {
        is: true,
        then: Joi.date().required(),
        otherwise: Joi.date().optional().empty('')
    }),
    attendedToT: Joi.any().valid(true, false, 1, 0, '1', '0', '').optional().default(false).custom((value: any) => { return value == '' ? false : value }, 'customTransform'),
    ToTdate: Joi.when('attendedToT', {
        is: true,
        then: Joi.date().required(),
        otherwise: Joi.date().optional().empty('')
    }),
    contractSigned: Joi.any().valid(true, false, 1, 0, '1', '0', '').optional().default(false).custom((value: any) => { return value == '' ? false : value }, 'customTransform'),
    contractSigningDate: Joi.when('contractSigned', {
        is: true,
        then: Joi.date().required(),
        otherwise: Joi.date().optional().empty('')
    }),
    contractStatus: Joi.string().required()
})
