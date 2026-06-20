JEKYLL ?= jekyll
HOST ?= 127.0.0.1
PORT ?= 4000

.PHONY: build serve clean

build:
	$(JEKYLL) build

serve:
	$(JEKYLL) serve --host $(HOST) --port $(PORT)

clean:
	rm -rf _site .jekyll-cache
