// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {getCurrentUserId} from 'mattermost-redux/selectors/entities/users';
import {getEmojiImageUrl} from 'mattermost-redux/utils/emoji_utils';

import {getEmojiMap} from 'selectors/emojis';

import PostEmoji from './post_emoji.jsx';

function mapStateToProps(state, ownProps) {
    const config = getConfig(state);
    const emojiMap = getEmojiMap(state);
    const emoji = emojiMap.get(ownProps.name);

    let imageUrl = '';
    let displayTextOnly = false;
    if (emoji) {
        imageUrl = getEmojiImageUrl(emoji);
    } else {
        displayTextOnly =
            state.entities.emojis.nonExistentEmoji.has(ownProps.name) ||
            config.EnableCustomEmoji !== 'true' ||
            getCurrentUserId(state) === '';
    }

    return {
        imageUrl,
        displayTextOnly,
    };
}

export default connect(mapStateToProps)(PostEmoji);
