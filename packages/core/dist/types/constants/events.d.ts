export declare const EVENT_CLIENT_CONTEXT = "event-client";
export declare const EVENT_CLIENT_PAIRING_TRACES: {
    pairing_started: string;
    pairing_uri_validation_success: string;
    pairing_uri_not_expired: string;
    store_new_pairing: string;
    subscribing_pairing_topic: string;
    subscribe_pairing_topic_success: string;
    existing_pairing: string;
    pairing_not_expired: string;
    emit_inactive_pairing: string;
    emit_session_proposal: string;
    subscribing_to_pairing_topic: string;
};
export declare const EVENT_CLIENT_PAIRING_ERRORS: {
    no_wss_connection: string;
    no_internet_connection: string;
    malformed_pairing_uri: string;
    active_pairing_already_exists: string;
    subscribe_pairing_topic_failure: string;
    pairing_expired: string;
    proposal_expired: string;
    proposal_listener_not_found: string;
};
export declare const EVENT_CLIENT_SESSION_TRACES: {
    session_approve_started: string;
    proposal_not_expired: string;
    session_namespaces_validation_success: string;
    create_session_topic: string;
    subscribing_session_topic: string;
    subscribe_session_topic_success: string;
    publishing_session_approve: string;
    session_approve_publish_success: string;
    store_session: string;
    publishing_session_settle: string;
    session_settle_publish_success: string;
};
export declare const EVENT_CLIENT_SESSION_ERRORS: {
    no_internet_connection: string;
    no_wss_connection: string;
    proposal_expired: string;
    subscribe_session_topic_failure: string;
    session_approve_publish_failure: string;
    session_settle_publish_failure: string;
    session_approve_namespace_validation_failure: string;
    proposal_not_found: string;
};
export declare const EVENT_CLIENT_AUTHENTICATE_TRACES: {
    authenticated_session_approve_started: string;
    authenticated_session_not_expired: string;
    chains_caip2_compliant: string;
    chains_evm_compliant: string;
    create_authenticated_session_topic: string;
    cacaos_verified: string;
    store_authenticated_session: string;
    subscribing_authenticated_session_topic: string;
    subscribe_authenticated_session_topic_success: string;
    publishing_authenticated_session_approve: string;
    authenticated_session_approve_publish_success: string;
};
export declare const EVENT_CLIENT_AUTHENTICATE_ERRORS: {
    no_internet_connection: string;
    no_wss_connection: string;
    missing_session_authenticate_request: string;
    session_authenticate_request_expired: string;
    chains_caip2_compliant_failure: string;
    chains_evm_compliant_failure: string;
    invalid_cacao: string;
    subscribe_authenticated_session_topic_failure: string;
    authenticated_session_approve_publish_failure: string;
    authenticated_session_pending_request_not_found: string;
};
export declare const EVENTS_STORAGE_VERSION = 0.1;
export declare const EVENTS_STORAGE_CONTEXT = "event-client";
export declare const EVENTS_STORAGE_CLEANUP_INTERVAL = 86400;
export declare const EVENTS_CLIENT_API_URL = "https://pulse.walletconnect.org/batch";
//# sourceMappingURL=events.d.ts.map