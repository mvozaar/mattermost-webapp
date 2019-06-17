// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import * as TextFormatting from 'utils/text_formatting.jsx';

describe('TextFormatting.mentionHighlighting', () => {
    const testCases = [
        {
            name: 'no mentions',
            input: 'These are words',
            mentionKeys: [],
            expected: '<p>These are words</p>',
        },
        {
            name: 'not an at-mention',
            input: 'These are words',
            mentionKeys: [{key: 'words'}],
            expected:
                "<p>These are <span class='mention--highlight'>words</span></p>",
        },
        {
            name: 'at-mention',
            input: 'These are @words',
            mentionKeys: [{key: '@words'}],
            expected:
                "<p>These are <span class='mention--highlight'><span data-mention='words'>@words</span></span></p>",
        },
        {
            name: 'at-mention and non-at-mention for same word',
            input: 'These are @words',
            mentionKeys: [{key: '@words'}, {key: 'words'}],
            expected:
                "<p>These are <span class='mention--highlight'><span data-mention='words'>@words</span></span></p>",
        },
        {
            name: 'case insensitive mentions',
            input: 'These are words and Words and wORDS',
            mentionKeys: [{key: 'words'}],
            expected:
                "<p>These are <span class='mention--highlight'>words</span> and <span class='mention--highlight'>Words</span> and <span class='mention--highlight'>wORDS</span></p>",
        },
        {
            name: 'case sensitive mentions',
            input: 'These are words and Words and wORDS',
            mentionKeys: [{key: 'Words', caseSensitive: true}],
            expected:
                "<p>These are words and <span class='mention--highlight'>Words</span> and wORDS</p>",
        },
        {
            name: 'multibyte mentions',
            input: '我爱吃番茄炒饭',
            mentionKeys: [{key: '番茄'}],
            expected:
                "<p>\u6211\u7231\u5403<span class='mention--highlight'>\u756A\u8304</span>\u7092\u996D</p>",
        },
        {
            name: 'multibyte mentions twice in one sentence',
            input: '石橋さんが石橋を渡る',
            mentionKeys: [{key: '石橋'}],
            expected:
                "<p><span class='mention--highlight'>\u77F3\u6A4B</span>\u3055\u3093\u304C<span class='mention--highlight'>\u77F3\u6A4B</span>\u3092\u6E21\u308B</p>",
        },
        {
            name: 'combine multibyte and ascii mentions key',
            input: '３words 3words',
            mentionKeys: [{key: 'words'}],
            expected:
                "<p>\uFF13<span class='mention--highlight'>words</span> 3words</p>",
        },
        {
            name: 'at mention linking disabled, mentioned by non-at-mention',
            input: 'These are @words',
            atMentions: false,
            mentionKeys: [{key: 'words'}],
            expected:
                "<p>These are @<span class='mention--highlight'>words</span></p>",
        },
        {
            name: 'at mention linking disabled, mentioned by at-mention',
            input: 'These are @words',
            atMentions: false,
            mentionKeys: [{key: '@words'}],
            expected:
                "<p>These are <span class='mention--highlight'>@words</span></p>",
        },
        {
            name: 'mention highlighting disabled',
            input: 'These are words',
            mentionHighlight: false,
            mentionKeys: [{key: 'words'}],
            expected: '<p>These are words</p>',
        },
        {
            name: 'mention highlighting and at mention linking disabled',
            input: 'These are @words',
            atMentions: false,
            mentionHighlight: false,
            mentionKeys: [{key: '@words'}],
            expected: '<p>These are @words</p>',
        },
    ];

    for (const testCase of testCases) {
        it(testCase.name, () => {
            const options = {
                atMentions:
                    'atMentions' in testCase ? testCase.atMentions : true,
                mentionHighlight:
                    'mentionHighlight' in testCase
                        ? testCase.mentionHighlight
                        : true,
                mentionKeys: testCase.mentionKeys,
            };

            const output = TextFormatting.formatText(
                testCase.input,
                options,
            ).trim();

            expect(output).toEqual(testCase.expected);
        });
    }
});
