# Notes

## Decisions

- Used Redux for notification state instead of local component state. Since unread count needs to reflect in the header and the panel needed to be toggled from the bell button, keeping state in Redux made it accessible across both without prop drilling.

- Notifications are fetched once on mount and stored in Redux. No PATCH endpoint for updating read state, so mark as read is handled client-side in the store only, which matches the note in the API route.

- Followed the same Redux slice pattern established by the sidebar: slice, selectors, and actions all in one file, registered in the store in the same way.

- Used a separate NotificationItem component to keep the panel component clean and mirror how activity-feed separates its item rendering into activity-item.tsx.

- The useEffect watching unreadCount updates the document title to reflect the current unread count, resetting to "Anivive" when all notifications are read.

## What I would do differently with more time

- Add a click-outside handler to close the panel when clicking elsewhere on the page.

- Persist read state so refreshing the page does not reset notifications back to unread.

- Add a timestamp to each notification item.

- Add an API endpoint for updating read state and wire mark as read through the server instead of only in local Redux state.

- A dedicated notifications page accessible from the sidebar.

- Animations for the panel opening and closing.