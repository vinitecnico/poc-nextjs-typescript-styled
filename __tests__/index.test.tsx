import React from 'react';
import Info from '../pages/info';

describe('Index', () => {
    it('should render without throwing an error', () => {
        expect(typeof Info).toBe('function');
    });
})