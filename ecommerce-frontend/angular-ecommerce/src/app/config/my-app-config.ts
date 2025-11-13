export default {
    auth: {
        domain: "dev-t560tzc4yfuu12s0.us.auth0.com", 
        clientId: "VIGzm1as3Bo7ybzb7Vz8c1VD478IyWT2",
        authorizationParams: {
            redirect_uri: "http://localhost:4200/login/callback",
            audience: "http://localhost:8080",
          },
    },
    httpInterceptor: {
        allowedList: ['http://localhost:8080/api/orders/**','http://localhost:8080/api/checkout/purchase'],
    },
}
