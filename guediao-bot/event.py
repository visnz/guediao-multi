class Event(object):
    __slots__ = ('name', 'des')

    def __init__(self,name,des):
        self.name=name
        self.des=des

    @property
    def name(self):
        return self.name
