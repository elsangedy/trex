import fetchEvent from './fetch';
import installEvent from './install';
import messageEvent from './message';
import activateEvent from './activate';

// has to be var, because we need function scope
declare var self: ServiceWorkerGlobalScope;

self.addEventListener('install', installEvent);

self.addEventListener('fetch', fetchEvent);

self.addEventListener('activate', activateEvent);

self.addEventListener('message', messageEvent);
