export interface RecuperarPago {
    result: Result;
    buildNumber: string;
    timestamp: string;
    ndc: string;
    records: Record[];
}

export interface Record {
    id: string;
    paymentType: string;
    paymentBrand: string;
    result: Result;
    card: Card;
    customer: Customer;
    billing: Billing;
    threeDSecure: ThreeDSecure;
    customParameters: CustomParameters;
    risk: Risk;
    timestamp: string;
}

export interface Billing {
    street1: string;
    street2: string;
    friendId: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
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

export interface Risk {
    score: string;
}

export interface ThreeDSecure {
    eci: string;
}
