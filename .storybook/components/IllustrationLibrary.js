
import React from 'react';
import { Icon } from '../../src/components/Icon';

/**
 * Custom icon gallery component for Storybook to
 * automatically render a batch of icons from our library
 *
 * Note that this *must* be in JavaScript because
 * Storybook's components don't fully support React 18.
 */
export function IllustrationLibrary({ group }) {

  // TODO: Intelligently generate this from the rui-illustration namespace
  const illustrations = {
    brand: [
      'rui-logo',
    ],
    osu: [
      'office-of-research-wordmark',
      'osu-blocko',
    ],
    system: [
      'error',
      'no-search-results',
      'not-found',
      'timeout',
      'unauthorized',
      'unavailable',
    ]
  };

  const config = {
    brand: {
      c: 'light-contrast',
    },
    system: {
      c: 'clear',
      svgProps: {
        stroke: '#666666',
        strokeWidth: 1.5,
      }
    }
  };

  return (
    <div>
      {illustrations[group].map(name =>
        <div>
          <Icon
            name={'rui-illustration:' + name}
            size={200}
            {...config[group]}
          />
          rui-illustration:{name}
        </div>
      )}
    </div>
  );
}
