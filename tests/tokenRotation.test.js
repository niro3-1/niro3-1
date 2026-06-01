// Unit tests for token rotation failure scenarios

import { expect } from 'chai';
import { rotateToken } from './tokenService';

describe('Token Rotation', () => {
    it('should throw an error when token is expired', () => {
        const expiredToken = 'expired_token';
        expect(() => rotateToken(expiredToken)).to.throw('Token expired');
    });

    it('should throw an error when token is invalid', () => {
        const invalidToken = 'invalid_token';
        expect(() => rotateToken(invalidToken)).to.throw('Invalid token');
    });

    it('should handle network errors gracefully', () => {
        const networkErrorToken = 'network_error_token';
        expect(() => rotateToken(networkErrorToken)).to.throw('Network error');
    });
});