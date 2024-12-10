export interface Pago {
    id: string;
    paymentType: string;
    paymentBrand: string;
    amount: string;
    currency: string;
    descriptor: string;
    merchantTransactionId: string;
    result: Result;
    resultDetails: ResultDetails;
    card: Card;
    customer: Customer;
    billing: Billing;
    shipping: Shipping;
    threeDSecure: ThreeDSecure;
    customParameters: CustomParameters;
    risk: Risk;
    buildNumber: string;
    timestamp: string;
    ndc: string;
}

export interface Billing {
    street1: string;
    friendId: string;
    postcode: string;
}

export interface Card {
    bin: string;
    last4Digits: string;
    holder: string;
    expiryMonth: string;
    expiryYear: string;
}

export interface CustomParameters {
    SHOPPER_EndToEndIdentity: string;
    CTPE_DESCRIPTOR_TEMPLATE: string;
}

export interface Customer {
    phone: string;
    email: string;
    ip: string;
    browserFingerprint: BrowserFingerprint;
}

export interface BrowserFingerprint {
    value: string;
}

export interface Result {
    code: string;
    description: string;
}

export interface ResultDetails {
    authCode: string;
    ConnectorTxID1: string;
    RiskFraudStatusCode: string;
    natCont: string;
    RiskReport: string;
    EXTERNAL_SYSTEM_LINK: string;
    TransactionId: string;
    RiskFraudDescription: string;
    ExtendedDescription: string;
    action: string;
    AcquirerResponse: string;
    RiskOrderId: string;
    acquirerResponse: string;
    AcquirerTimestamp: Date;
}

export interface Risk {
    score: string;
}

export interface Shipping {
    country: string;
}

export interface ThreeDSecure {
    eci: string;
    version: string;
    dsTransactionId: string;
    challengeMandatedIndicator: string;
    acsTransactionId: string;
    cardHolderInfo: string;
    flow: string;
    authenticationStatus: string;
}
