// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import Badge from './badge.jsx';

describe('components/widgets/badges/Badge', () => {
    test('should match the snapshot on show', () => {
        const wrapper = shallow(
            <Badge className={'test'}>{'Test text'}</Badge>,
        );

        expect(wrapper).toMatchInlineSnapshot(`
<div
  className="Badge test"
>
  Test text
</div>
`);
    });

    test('should match the snapshot on hide', () => {
        const wrapper = shallow(<Badge show={false}>{'Test text'}</Badge>);

        expect(wrapper).toMatchInlineSnapshot("''");
    });
});
