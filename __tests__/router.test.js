/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js'

describe('pushToHistory', () => {
    // test settings case
    test('settings test', () => {
        // pushToHistory
        const pushState = pushToHistory('settings', 0);

        // test length
        expect(pushState.length).toBe(history.length);

        // test if state is correct
        expect(pushState.state.page).toBe('settings');
    });
    // test entry case
    test('entry test', () => {
        // pushToHistory
        const pushState = pushToHistory('entry', 1);

        // test length
        expect(pushState.length).toBe(history.length);

        // test if state is correct
        expect(pushState.state.page).toBe('entry1')
    });
    // test default case
    test('default test', () => {
        // pushToHistory
        const pushState = pushToHistory('beepboop', 1);

        // test length
        expect(pushState.length).toBe(history.length);

        // test if state is correct
        expect(pushState.state.page).toBe(undefined);
    });
});
