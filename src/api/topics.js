import Parse from 'parse/react-native';

export function get() {
  return new Promise((resolve, reject) => {
    const Topic = Parse.Object.extend('Topic');
    const query = new Parse.Query(Topic);

    query.limit(1);

    query.notEqualTo('yes', Parse.User.current());
    query.notEqualTo('no', Parse.User.current());

    query.find({
      success: list => resolve(list[0]),
      error: (list, err) => reject(err),
    });
  });
}

export function getMatches() {
  return new Promise((resolve, reject) => {
    const Topic = Parse.Object.extend('Topic');
    const query = new Parse.Query(Topic);

    query.limit(200);

    query.equalTo('yes', Parse.User.current());
    query.include('yes');

    query.find({
      success: list => {
        // Resolve only the results that have more than 1 person interested
        resolve({ result: list });
      },
      error: (list, err) => reject(err),
    });
  });
}

export function create(title, description) {
  return new Promise((resolve, reject) => {
    const Topic = Parse.Object.extend('Topic');
    const topic = new Topic();

    topic.set('createdBy', Parse.User.current());
    topic.set('title', title);
    topic.set('description', description);

    topic.save(null, {
      success: res => resolve(res),
      error: (res, err) => reject(err),
    });
  });
}

export function markInterested(topic) {
  return new Promise((resolve, reject) => {
    topic.addUnique('yes', Parse.User.current());

    topic.save(null, {
      success: res => resolve(res),
      error: (res, err) => reject(err),
    });
  });
}

export function markUninterested(topic) {
  return new Promise((resolve, reject) => {
    topic.addUnique('no', Parse.User.current());

    topic.save(null, {
      success: res => resolve(res),
      error: (res, err) => reject(err),
    });
  });
}
