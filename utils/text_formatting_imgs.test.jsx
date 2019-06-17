// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import assert from 'assert';

import * as Markdown from 'utils/markdown';

describe('Markdown.Imgs', () => {
    it('Inline mage', (done) => {
        assert.equal(
            Markdown.format('![securCom](/images/icon.png)').trim(),
            "<p><img src='/images/icon.png' alt='SCC' class='markdown-inline-img'></p>",
        );

        done();
    });

    it('Image with hover text', (done) => {
        assert.equal(
            Markdown.format(
                "![securCom](/images/icon.png 'securCom Icon')",
            ).trim(),
            "<p><img src='/images/icon.png' alt='SCC' title='securCom Icon' class='markdown-inline-img'></p>",
        );

        done();
    });

    it('Image with link', (done) => {
        assert.equal(
            Markdown.format(
                '[![securCom](../../images/icon-76x76.png)](https://github.com/mattermost/platform)',
            ).trim(),
            "<p><a class='theme markdown__link' href='https://github.com/mattermost/platform' rel='noreferrer' target='_blank'><img src='../../images/icon-76x76.png' alt='SCC' class='markdown-inline-img'></a></p>",
        );

        done();
    });

    it('Image with width and height', (done) => {
        assert.equal(
            Markdown.format(
                "![securCom](../../images/icon-76x76.png =50x76 'securCom Icon')",
            ).trim(),
            "<p><img src='../../images/icon-76x76.png' alt='SCC' title='securCom Icon' width='50' height='76' class='markdown-inline-img'></p>",
        );

        done();
    });

    it('Image with width', (done) => {
        assert.equal(
            Markdown.format(
                "![securCom](../../images/icon-76x76.png =50 'securCom Icon')",
            ).trim(),
            "<p><img src='../../images/icon-76x76.png' alt='SCC' title='securCom Icon' width='50' class='markdown-inline-img'></p>",
        );

        done();
    });
});
